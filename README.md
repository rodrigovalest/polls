# Sistema de votação
- Este projeto é um sistema de votação que permite a criação e gerenciamento de enquetes, com opções de resposta dinâmicas e resultados apresentados em tempo real.

## Tecnologias utilizadas
- **Backend:** PHP v8, Laravel v9
- **Frontend:** node v10.8.2, TypeScript v5, React v18, NextJS v14, tailwindcss, react-query, axios, react-hook-form, yup
- **Banco de dados:** MySQL v8.4

## Como executar o projeto

- Clone o repositório:

```
git clone https://github.com/rodrigovalest/polls.git
cd polls
```

- Instale as dependências do backend:

```
composer install
```

- Copie o arquivo .env.example para .env e preenchendo com as variáveis de ambiente.

```
cp .env.example .env
```

- Execute as migrações e seeders para criar as tabelas e dados iniciais:

```
php artisan migrate --seed
```

- Instale as dependências do frontend:

```
npm install
```

- Inicie o servidor:

```
php artisan serve
npm run dev
```