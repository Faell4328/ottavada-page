#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}Instalador do Ottavada v1.4 (com extração)${NC}"
echo "----------------------------------------------"

# Função para detectar a distribuição
detectar_distro() {
    if [ -f /etc/os-release ]; then
        . /etc/os-release
        DISTRO_ID="$ID"
    elif command -v lsb_release &> /dev/null; then
        DISTRO_ID=$(lsb_release -is | tr '[:upper:]' '[:lower:]')
    else
        DISTRO_ID="unknown"
    fi
}

# Função para instalar curl e wget se ausentes
instalar_download_tools() {
    local precisa_curl=false
    local precisa_wget=false

    if ! command -v curl &> /dev/null; then
        precisa_curl=true
    fi
    if ! command -v wget &> /dev/null; then
        precisa_wget=true
    fi

    if [ "$precisa_curl" = false ] && [ "$precisa_wget" = false ]; then
        echo -e "${GREEN}✓ curl e wget já estão instalados.${NC}"
        return 0
    fi

    echo -e "${YELLOW}ATENÇÃO: O sistema não possui curl ou wget.${NC}"
    echo "O instalador precisa de um desses para baixar o AppImage."
    read -p "Deseja instalar automaticamente? (s/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        echo -e "${RED}Instalação cancelada pelo usuário.${NC}"
        exit 1
    fi

    detectar_distro

    echo -e "${YELLOW}Detectado: $DISTRO_ID${NC}"

    if ! command -v sudo &> /dev/null; then
        echo -e "${RED}Erro: 'sudo' não está disponível. Instale manualmente.${NC}"
        exit 1
    fi

    local PACKAGES=""
    local INSTALL_CMD=""

    case "$DISTRO_ID" in
        ubuntu|debian|linuxmint|pop|elementary|zorin)
            PACKAGES="curl wget"
            INSTALL_CMD="sudo apt update && sudo apt install -y"
            ;;
        fedora|rhel|centos)
            PACKAGES="curl wget"
            INSTALL_CMD="sudo dnf install -y"
            ;;
        arch|manjaro|endeavouros)
            PACKAGES="curl wget"
            INSTALL_CMD="sudo pacman -S --noconfirm"
            ;;
        opensuse|suse)
            PACKAGES="curl wget"
            INSTALL_CMD="sudo zypper install -y"
            ;;
        *)
            echo -e "${RED}Distribuição não reconhecida: $DISTRO_ID${NC}"
            echo "Instale curl e wget manualmente:"
            echo "  Debian/Ubuntu: sudo apt install curl wget"
            echo "  Fedora:        sudo dnf install curl wget"
            echo "  Arch:          sudo pacman -S curl wget"
            exit 1
            ;;
    esac

    echo -e "${YELLOW}Instalando $PACKAGES com $INSTALL_CMD...${NC}"
    if eval "$INSTALL_CMD $PACKAGES"; then
        echo -e "${GREEN}✓ Instalação concluída.${NC}"
        if command -v curl &> /dev/null || command -v wget &> /dev/null; then
            return 0
        else
            echo -e "${RED}Falha na instalação.${NC}"
            exit 1
        fi
    else
        echo -e "${RED}Falha na instalação.${NC}"
        exit 1
    fi
}

# --- Execução principal ---

# Instala dependências, se necessário
instalar_download_tools

# Diretórios
INSTALL_BASE="$HOME/Applications"
APP_DIR="$INSTALL_BASE/ottavada"
DESKTOP_DIR="$HOME/.local/share/applications"
ICON_DIR="$HOME/.local/share/icons"
APPIMAGE_NAME="Ottavada_x64.AppImage"
DOWNLOAD_URL="https://github.com/Faell4328/ottavada/releases/download/v1.4/Ottavada_x64.AppImage"

mkdir -p "$APP_DIR"
mkdir -p "$DESKTOP_DIR"
mkdir -p "$ICON_DIR"

# Função para baixar o AppImage
baixar_appimage() {
    echo -e "${YELLOW}Baixando $APPIMAGE_NAME do GitHub...${NC}"
    if command -v curl &> /dev/null; then
        curl -L -o "$APP_DIR/$APPIMAGE_NAME" "$DOWNLOAD_URL"
    elif command -v wget &> /dev/null; then
        wget -O "$APP_DIR/$APPIMAGE_NAME" "$DOWNLOAD_URL"
    else
        echo -e "${RED}Erro: Nenhum downloader disponível.${NC}"
        exit 1
    fi

    if [ $? -ne 0 ] || [ ! -f "$APP_DIR/$APPIMAGE_NAME" ]; then
        echo -e "${RED}Falha no download. Verifique sua internet.${NC}"
        exit 1
    fi
    echo -e "${GREEN}Download OK.${NC}"
}

# Verifica se já existe
if [ -f "$APP_DIR/$APPIMAGE_NAME" ]; then
    echo -e "${YELLOW}Arquivo já existe em $APP_DIR.${NC}"
    read -p "Baixar novamente? (s/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        rm -f "$APP_DIR/$APPIMAGE_NAME"
        baixar_appimage
    else
        echo -e "${GREEN}Usando o existente.${NC}"
    fi
else
    baixar_appimage
fi

# Torna executável
chmod +x "$APP_DIR/$APPIMAGE_NAME"

# Extrai o AppImage
echo -e "${YELLOW}Extraindo o AppImage em $APP_DIR...${NC}"
cd "$APP_DIR" || exit 1

if [ -d "squashfs-root" ]; then
    rm -rf "squashfs-root"
fi

./"$APPIMAGE_NAME" --appimage-extract > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo -e "${RED}Falha na extração. Verifique se o arquivo é um AppImage válido.${NC}"
    exit 1
fi
echo -e "${GREEN}Extração concluída.${NC}"

# --- Procura específica por ottavada.png dentro da extração ---
ICON_SOURCE=""
echo -e "${YELLOW}Procurando por 'ottavada.png' dentro da extração...${NC}"

# Busca recursiva por ottavada.png
ICON_SOURCE=$(find squashfs-root -type f -name "ottavada.png" 2>/dev/null | head -n 1)

# Se não encontrou, procura por qualquer .png ou .svg (fallback)
if [ -z "$ICON_SOURCE" ]; then
    echo -e "${YELLOW}Não encontrou ottavada.png. Procurando por outros ícones...${NC}"
    ICON_SOURCE=$(find squashfs-root -type f \( -name "*.png" -o -name "*.svg" \) 2>/dev/null | head -n 1)
fi

# Define o caminho final do ícone
ICON_DEST=""
if [ -n "$ICON_SOURCE" ]; then
    echo -e "${GREEN}Ícone encontrado: $ICON_SOURCE${NC}"
    # Copia o ícone para ~/.local/share/icons/ottavada.png
    ICON_DEST="$ICON_DIR/Ottavada.png"
    cp "$ICON_SOURCE" "$ICON_DEST"
    echo -e "${GREEN}Ícone copiado para $ICON_DEST${NC}"
else
    echo -e "${YELLOW}Nenhum ícone encontrado. Usaremos o AppImage original como ícone.${NC}"
    # Mantém o AppImage original para ser usado como ícone
    ICON_DEST="$APP_DIR/$APPIMAGE_NAME"
fi

# --- Decisão sobre remover o AppImage original ---
if [ -n "$ICON_SOURCE" ]; then
    # Encontrou ícone, pode remover o AppImage original
    echo -e "${YELLOW}Removendo o AppImage original para economizar espaço...${NC}"
    rm -f "$APP_DIR/$APPIMAGE_NAME"
    echo -e "${GREEN}AppImage original removido.${NC}"
else
    # Não encontrou ícone, mantém o AppImage
    echo -e "${YELLOW}Mantendo o AppImage original para uso como ícone.${NC}"
fi

# Executável extraído
EXEC_PATH="$APP_DIR/squashfs-root/AppRun"

# Cria o arquivo .desktop
DESKTOP_FILE="$DESKTOP_DIR/ottavada.desktop"
echo -e "${YELLOW}Criando atalho em $DESKTOP_FILE...${NC}"

cat > "$DESKTOP_FILE" << EOF
[Desktop Entry]
Name=Ottavada
Comment=Gerenciador de AppImages para Linux
Exec=$EXEC_PATH
Icon=$ICON_DEST
Terminal=false
Type=Application
Categories=Utility;System;
StartupNotify=true
EOF

# Atualiza banco de dados de atalhos
if command -v update-desktop-database &> /dev/null; then
    update-desktop-database "$DESKTOP_DIR"
    echo -e "${GREEN}Banco de atalhos atualizado.${NC}"
else
    echo -e "${YELLOW}update-desktop-database não encontrado. O atalho pode não aparecer até reiniciar.${NC}"
fi

echo -e "${GREEN}✅ Instalação concluída!${NC}"
echo -e "${BLUE}Ottavada está no seu menu de aplicativos.${NC}"
echo -e "Executável: ${YELLOW}$EXEC_PATH${NC}"
echo -e "Ícone: ${YELLOW}$ICON_DEST${NC}"

if [ -f "$APP_DIR/$APPIMAGE_NAME" ]; then
    echo -e "${YELLOW}O AppImage original foi mantido (necessário como ícone).${NC}"
else
    echo -e "${GREEN}O AppImage original foi removido para economizar espaço.${NC}"
fi

echo -e "${YELLOW}Para desinstalar, exclua a pasta $APP_DIR, o ícone $ICON_DEST e o arquivo $DESKTOP_FILE${NC}"

# --- 🚀 Abrir o Ottavada automaticamente ---
echo -e "${GREEN}Iniciando o Ottavada...${NC}"
"$EXEC_PATH" &

# Pequena pausa para garantir que o programa inicie antes do script terminar
sleep 1
echo -e "${BLUE}O Ottavada foi aberto em segundo plano.${NC}"
