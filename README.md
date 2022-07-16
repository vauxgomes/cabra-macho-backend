# Cabra Macho

### ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white")

## Summary

- [Descrição](#descrição)
- [Instalação](#instalação)
  - [Preparação do Banco](#preparação-do-banco)
  - [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Execução](#execução)
- [Releases](#releases)
- [Citações](#citações)


## Descrição

Este projeto disponibiliza uma modelagem simples de controle e gerência de animais em currais.

## Instalação

```sh
# Clone o repositório
git clone https://github.com/vauxgomes/cabra-macho-backend.git

# Acesse a pasta
cd cabra-macho-backend

# Instale as dependências
npm install
```

### Preparação do banco

```sh
# Crie a pasta db/ dentro do seu projeto
mkdir db

# Inicie as tabelas do banco e execute a semente
npx knex migrate:latest
npx knex seed:run
```

#### Banco externo

No momento a aplicação utiliza um banco SQLite3 salvo na pasta `/db`. Para utilizar um banco diferente (local ou não) é necessário configurar o arquivo `knexfile.js` de acordo com as especificações da bibliote [Knex](http://knexjs.org/guide/).

### Variáveis de ambiente

Crie o arquivo `.env` e adicione as variáveis de ambiente abaixo

```sh
NODE_ENV=development
PORT=3333

SALT=10

KEY=123456 # Mude essa senha se quiser
KEY_EXP=8h
```

## Execução

```sh
npm run start
```

## Releases 

| Tag | Descrição | Status |
| --- |-----------| ------ |
| v0.1 | Versão Beta para desenvolvimento | `Em desenvolvimento` |
| v1.0 | Sistemas completo e publicado | -- |

## Citações

Caso queira citar este projeto:

```bibtex
@software{GomesNunes2022,
    author = {Nunes, Abrahão Lucas Barboza & Gomes, Vaux Sandino Diniz},
    month = {8},
    title = {{Modelo de gerência e controle de animais}},
    version = {1.0.0},
    year = {2022}
}
```