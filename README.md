# Server-side app created with TypeORM and Express

JSON API client for CRUD operations on user and domains entities.

### How to run

Start the database server

```
$ docker compose up --build
```

Start the API server in another tab

```
$ npm start
```

For livereload use

```
$ npm run dev
```

### Linting and formatting

Run eslint

```
$ npm run lint # to view issues
$ npm run lint:fix # to autofix issues
```

Run prettier

```
$ npm run format # to view issues
$ npm run format:write # to autofix issues
```
