#!/bin/sh
set -e

OS=$(uname -s)
ARCH=$(uname -m)
VERSION="1.3"
BASE_URL="https://github.com/Faell4328/ottavada/releases/download/v${VERSION}"

if [ "$OS" != "Darwin" ]; then
    echo "Este instalador e apenas para macOS."
    echo "No Linux, baixe o AppImage diretamente do site."
    exit 1
fi

case "$ARCH" in
    x86_64|amd64) ARCH_SUFFIX="x64" ;;
    arm64|aarch64) ARCH_SUFFIX="xARM" ;;
    *) echo "Arquitetura nao suportada: $ARCH"; exit 1 ;;
esac

FILE="Mac_Ottavada_${ARCH_SUFFIX}.dmg"
URL="${BASE_URL}/${FILE}"
echo "Baixando $URL ..."
DMG="/tmp/${FILE}"
curl -L -o "$DMG" "$URL"
echo "Abrindo instalador..."
open "$DMG"
