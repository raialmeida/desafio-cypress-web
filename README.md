# Desafio-cypress-web

<p align="left">O mapa mental com funcionalidades do site está na raiz do projeto arquivo .jpg.</p>
<p align="left">Criado o arquivo dockerfile para rodar no docker.</p>


## Descrição
<p align="left">Projeto automação do site http://automationpractice.com/</p>

### 📋 Pré-requisitos:
Precisa ter instalado em sua máquina as seguintes ferramentas:

  - Node.js versão 12 ou superior
  - VSCode


### 🔧 Instalação

 1. Instale na máquina o Node.js ou posterior. o cypress precisam do node 12 ou superior.
 2. Clone este repositório.
 3. Execute`npm install` para instalar as dependências.
 
### ⚙️ Executando os testes
Para executar os testes no chrome executa o seguinte o comando:
```
npm run chrome
```
Para executar os testes no firefox executa o seguinte o comando:
```
npm run firefox
```
Para executar os testes usando a interface do cypress executa o comando:
```
npm run cypress:open
```
Utilizando docker, você pode executar o projeto com apenas um comando:
<p align="left">Irá criar a imagem e executar os testes.</p>

```
sudo docker build .
```


### 🔩 Analises dos testes

- O teste vai executar  o arquivo contendo o steps descrito em gherkin arquivo .feature.
- O cypress possui o dashbord onde conseguimos analisar todo historico do testes, mas no momento não está incluso no projeto devido a autenticação.
- O cypress automaticamente gera o arquivo de vídeo do teste na pasta cypress/Videos, caso o teste falhe gera print na pasta cypress/Screenshots.

