@echo off
setlocal

:: Define a pasta de origem (use . para a pasta atual)
set "PASTA_ORIGEM=."

:: Define o nome do arquivo de saída
set "FICHEIRO_SAIDA=lista_arquivos.txt"

:: Apaga o arquivo de saída se já existir
if exist "%FICHEIRO_SAIDA%" del "%FICHEIRO_SAIDA%"

:: Lista os arquivos e salva no ficheiro de saída
dir /b "%PASTA_ORIGEM%" > "%FICHEIRO_SAIDA%"

echo Lista de arquivos salva em %FICHEIRO_SAIDA%
exit
