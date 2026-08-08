set ARCH=%PROCESSOR_ARCHITECTURE%

if not "%ARCH:64=%"=="%ARCH%" (
    curl -L -o ottavada.exe https://github.com/Faell4328/ottavada/releases/download/v1.3/Windows_Ottavada_x64.exe
    ottavada.exe
) else (
    curl -L -o ottavada.exe https://github.com/Faell4328/ottavada/releases/download/v1.3/Windows_Ottavada_x32.exe
    ottavada.exe
)
