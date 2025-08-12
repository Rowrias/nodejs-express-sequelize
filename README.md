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

06. Comando para criar um modelo Categoria:
    - npx sequelize-cli model:generate --name Categoria --attributes titulo:string

07. Comando para criar um modelo Curso:
    - npx sequelize-cli model:generate --name Curso --attributes titulo:string,descricao:string,data_inicio:dateonly

08. Comando para criar um modelo Matricula:
    - npx sequelize-cli model:generate --name Matricula --attributes status:string

09. Depois criar um tablename no models e "vincular" com o migrations.

10. Enviando para o Banco:
    - npx sequelize-cli db:migrate

11. Populando o banco (seeders):
    - npx sequelize-cli seed:generate --name demo-categorias
    - npx sequelize-cli seed:generate --name demo-cursos
    - npx sequelize-cli seed:generate --name demo-matriculas

12. Executando o banco (sqlite):
    - npx sequelize-cli db:seed --seed 20250812113445-demo-categorias
    - npx sequelize-cli db:seed --seed 20250812113511-demo-cursos
    - npx sequelize-cli db:seed --seed 20250812113531-demo-matriculas