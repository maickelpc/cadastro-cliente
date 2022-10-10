# Cadatro de Clientes

## Objetivos:
Cadastrar clientes de forma rápida e segura.

## Tecnologias: 
* PHP 7.2.5
* Laravel 8.0
* VueJS 2.0
* Mysql 8.0
* NodeJS 14.18.3
* NPM 6.14.15 ou Similar
* Composer

## Guia de Instalação

Faça um clone do projeto para uma pasta desejada.
Configure o arquivo .env, copiando o .env-example e preenchendo as configurações de banco de dados
Acesse a pasta onde baixou o projeto, e instale as dependências do Laravel com o comando 
"composer install"

Execute o comando para criação da chave da aplicação:
php artisan key:generate

Execute o comando abaixo para criar e popular o banco de dados:
php artisan migrate --seed

Execute o comando abaixo para instalar as dependências do frontend do projeto:
npm install

para executar o front end, basta rodar o comando:
npm run watch

para executar o servidor do Laravel, execute o comando:
php artisan serve
 
Após executar esses passos, basta acessar o endereço "http://127.0.0.1:8000" no seu browser, e terá acesso ao Cadastro de Clientes