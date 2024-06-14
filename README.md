# API com JWT e SQlite

```json
{
  "author": "Perondini",
  "version": "1.0.0",
  "description": "Uma API em Node.js, utilizando Express, Sqlite e Autenticação JWT.",
  "authentication": {
    "method": "JWT (JSON Web Tokens)"
  },
  "storage": "Sqlite"
}
```

## Como usar

```bash
# Clone esse repositório
$ git clone https://github.com/jfperondini/api-node.git

# Vá para o repositório
$ cd api-node

# Instale as dependencias
$ npm install

# config as variável de ambiente no .env
$ PORT =  # porta para o servidor ex:. 3000
$ DB_PATH = # caminho e define o nome do banco de dados "./db/database.db"

# Rode a aplicação
$ npm run dev

# Rode script para deletar o banco de dados
$ npm run delete

# Rode script para limpar as tabelas do banco de dados
$ npm run clear
```

### Banco de Dados SQLite

Antes de começar, certifique-se de ter o SQLite instalado em seu sistema. Se você ainda não o possui, pode baixá-lo e instalá-lo a partir do [SQLite](https://www.sqlite.org/download.html).

O banco de dados para esta aplicação é gerado automaticamente pela API. Não é necessário criar um novo banco de dados, pois ele será criado e gerenciado pela própria aplicação durante a inicialização.

## Testando a API

Para testar a API, utilize um programa de sua preferência para enviar solicitações HTTP e siga estas etapas:

1. Importe o arquivo [JSON](/doc/documentation.json) que contém as requisições da API.
2. Após a importação, você terá acesso às requisições da API dentro do programa.
3. Comece a enviar requisições para testar os endpoints da sua API.

## Tecnologias

Essas são as tecnologias utilizadas nesse projeto

- **Backend**
  [Node.js](https://nodejs.org/en/),
  [Express](https://expressjs.com/pt-br/),
  [JSON WEB TOKEN](https://www.npmjs.com/package/jsonwebtoken),
  [Bcrypt](https://www.npmjs.com/package/bcrypt),
  [SQLite](https://www.npmjs.com/package/sqlite),
  [UUID](https://www.npmjs.com/package/uuid),
  [Yup](https://www.npmjs.com/package/yup),
  [Dotenv](https://www.npmjs.com/package/dotenv)

## Arquitetura
    .
    ├── db/
    |   └── database.db
    |── doc/
    |   ├── documentation.js
    |   └── api.json
    |── script/
    |   ├── clear.db.js
    |   └── delete.db.js
    |── src/
    |   ├── config/
    |   |   ├── configApp.js
    |   |   └── configEnv.js
    |   ├── controller/
    |   ├── db/
    |   |   ├── db.sqlite.js
    |   |   └── repository.sqlite.js
    |   ├── middlewares/
    |   |   ├── authMiddleware.js
    |   |   ├── configCors.js
    |   |   └── cofigJWT.js
    |   ├── repository/
    |   ├── route/
    |   ├── service/
    |   ├── utils/
    |   |   ├── create.hash.password.js
    |   |   ├── date.timejs
    |   |   ├── generate.code.js
    |   |   ├── log.js
    |   |   ├── validation.account.js
    |   |   ├── validation.user.js
    |   |   ├── validation.validation.js  
    |   |   └── validation.verification.js
    |   ├── app.js
    |   ├── app.repository.js
    |   ├── app.routes.js
    |   ├── app.js
    |   └── server.js
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    └── README.md

## Contribuição

- **Abrir Issues**: Caso encontre algum problema, bug ou tenha sugestões para melhorias, sinta-se à vontade para abrir uma nova issue. Isso nos ajudará a acompanhar e resolver os problemas de forma eficiente.

- **Enviar Pull Requests**: Se você tem uma solução para um problema ou uma nova funcionalidade que gostaria de adicionar, envie uma pull request. Estamos abertos a contribuições e teremos prazer em revisar e integrar suas alterações ao projeto.
