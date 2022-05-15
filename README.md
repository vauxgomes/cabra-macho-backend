# Instalação

```sh
# Clone o repositório
git clone https://github.com/vauxgomes/cabra-macho-backend.git

# Acesse a pasta
cd cabra-macho-backend

# Instale as dependências
npm install
```

# Preparação do banco

```sh
# Crie a pasta db/ dentro do seu projeto
mkdir db

# Inicie as tabelas do banco e execute a semente
npx knex migrate:latest
npx knex seed:run
```

# Variáveis de ambiente

Crie o arquivo `.env` e adicione as variáveis de ambiente abaixo

```sh
NODE_ENV=development
PORT=3333

SALT=10

KEY=123456 # Mude essa senha se quiser
KEY_EXP=8h
```

# Execução

```sh
npm run dev
```