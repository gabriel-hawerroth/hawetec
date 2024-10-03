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
ssh ubuntu@168.138.150.229 "pm2 delete ssr.hawetec"

# Remove os arquivos antigos no servidor remoto
ssh ubuntu@168.138.150.229 "rm -rf /home/ubuntu/prd_projects/front/prerendered-routes.json"
ssh ubuntu@168.138.150.229 "rm -rf /home/ubuntu/prd_projects/front/3rdpartylicenses.txt"
ssh ubuntu@168.138.150.229 "rm -rf /home/ubuntu/prd_projects/front/server/"
ssh ubuntu@168.138.150.229 "rm -rf /home/ubuntu/prd_projects/front/browser/"

# Copia os novos arquivos para o servidor remoto
scp -r dist/hawetec/* ubuntu@168.138.150.229:/home/ubuntu/prd_projects/front/

# Inicia o processo no servidor remoto
ssh ubuntu@168.138.150.229 "/home/ubuntu/start_scripts/start_hawetec.sh"
