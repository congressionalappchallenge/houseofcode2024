# CAC backend with express, postgresql, prisma and typescript

## Technologies

- Environment: Nodejs
- Language: Typescript
- Framework: Expressjs
- ORM: Prisma
- Database: Postgresql
- Authentication: Basic, JWT
- Inversion Of Control (D in SOLID): Awillix
- Password hash library: bcryptjs

## Prequisite

- Create the `.env` file by copying the `.env.example` file

- Run Postgres database at port 5432 or input connection string manually

```bash
docker run -e POSTGRES_PASSWORD=secrect -e POSTGRES_USER=postgres -p 5432:5432 postgres:15-alpine
```

- Create `.env` file from `.env.template` and update the `DATABASE_URL`:

```bash
cp .env.template .env
```

- Edit file `.env`

- Install dependencies

```bash
npm ci
```

- Initialize database schema

```bash
npx prisma migrate dev --name "init" --preview-feature
```

## Docker build

```bash
docker build -t app-name .
```

## NPM scripts

1. Run dev

```bash
npm run dev
```

2. Linting

```bash
npm run lint
```

3. Build

```bash
npm run build
```

4. Run production

```bash
npm run start
```
