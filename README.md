# nodejs-express-sequelize
Projeto utilizado no curso da Alura

01. Projeto:
    - baixar ou clonar o projeto no github da Alura.

02. Primeiro comando para baixar as dependencias:
    - npm install

03. Baixar o sequelize e sqlite:
    - npm install sequelize@6.32.1 sequelize-cli@6.6.1 sqlite3@5.1.6 --save-exact

04. Comando que criara 4 pastas na raiz e dps pegar as pastas que foram criadas e jogar para a pasta source e criar um arquivo .sequelizerc na raiz:
    - npx sequelize-cli init

05. Comando para criar um modelo Pessoa:
    - npx sequelize-cli model:generate --name Pessoa --attributes nome:string,email:string,cpf:string,ativo:boolean,role:string

06. x
