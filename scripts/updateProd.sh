#!/bin/bash

cd ..

# Executa o build em modo produção
npm run build:prod

# # Verifica se o build foi bem-sucedido
if [ $? -ne 0 ]; then
    echo "O build falhou. Parando a execução do script."
    exit 1
fi

# Deleta o processo existente do PM2 no servidor remoto
ssh ubuntu@hawetec "pm2 delete ssr.hawetec"

# Remove os arquivos antigos no servidor remoto
ssh ubuntu@hawetec "rm -rf /home/ubuntu/prd_projects/front/prerendered-routes.json"
ssh ubuntu@hawetec "rm -rf /home/ubuntu/prd_projects/front/3rdpartylicenses.txt"
ssh ubuntu@hawetec "rm -rf /home/ubuntu/prd_projects/front/server/"
ssh ubuntu@hawetec "rm -rf /home/ubuntu/prd_projects/front/browser/"

# Copia os novos arquivos para o servidor remoto
scp -r dist/hawetec/* ubuntu@hawetec:/home/ubuntu/prd_projects/front/

# Inicia o processo no servidor remoto
ssh ubuntu@hawetec "/home/ubuntu/start_scripts/start_hawetec.sh"
