
- (https://react-node-js-berry-dashboard.appseed-srv1.com/) - `LIVE Demo`


- Stack: `NodeJS` / `Express` / **SQLite** 
- `TypeScript`, Joy for validation
- **DB Layer**: `TypeORM`, `SQLite` persistence
- **Auth**: Passport / `passport-jwt` strategy
- [API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition) - the unified API structure implemented by this server


How to use it

Being a full-stack product, the backend and the frontend should be compiled and started separately. 
Before starting to compile the product, make sure you have the following tools installed in the environment:


Start the Frontend 

> **Step 1** - Once the project is downloaded, change the directory to `react-ui`. 

```bash
$ cd react-ui
```

<br >

> **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm install
then 
npm audit fix --force ken jew 100+ vulerabilities
```

<br />

> **Step 3** - Start in development mode

```bash
$ npm run start 
```

<br />

At this point, the app is available in the browser `localhost:3000` (the default address).


<br /> 

Start the Backend Server 

> **Step 1** - Change the directory to `api-server-nodejs`

```bash
$ cd api-server-nodejs
```

<br >

> **Step 2** - Install dependencies via NPM or yarn

```bash
$ npm install --force
```

<br />

> **Step 3** - Run the SQLite migration via TypeORM

```bash
$ npm run typeorm migration:run
// OR 
$ yarn typeorm migration:run
```

<br />

> **Step 4** - Start the API server (development mode)

```bash
$ npm run dev
// OR
$ yarn dev
```

The API server will start using the `PORT` specified in `.env` file (default 5000).

<br /> 

Codebase Structure

```bash
< ROOT / src >
     | 
     |-- config/                              
     |    |-- config.ts             # Configuration       
     |    |-- passport.ts           # Define Passport Strategy             
     | 
     |-- migration/
     |    |-- some_migration.ts     # database migrations
     |
     |-- models/                              
     |    |-- activeSession.ts      # Sessions Model (Typeorm)              
     |    |-- user.ts               # User Model (Typeorm) 
     | 
     |-- routes/                              
     |    |-- users.ts              # Define Users API Routes
     | 
     | 
     |-- index.js                   # API Entry Point
     |-- .env                       # Specify the ENV variables
     |                        
     |-- ************************************************************************
```

<br />

SQLite Path

The SQLite Path is set in `.env`, as `SQLITE_PATH`

<br />

Database migration

> Generate migration:

```bash
$ npm run typeorm migration:generate -n your_migration_name
```

> run migration: 

```bash
$ npm run typeorm migration:run
```

<br />
