set ARCH=%PROCESSOR_ARCHITECTURE%

if not "%ARCH:64=%"=="%ARCH%" (
    curl -L -o ottavada.exe https://github.com/Faell4328/ottavada/releases/download/v1.4/Ottavada_x64-setup.exe
    ottavada.exe /S
) else (
    curl -L -o ottavada.exe https://github.com/Faell4328/ottavada/releases/download/v1.4/Ottavada_x32-setup.exe
    ottavada.exe /S
)

cd /d "%LOCALAPPDATA%\ottavada"
start ottavada.exe
