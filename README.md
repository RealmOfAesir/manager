# Aesir Manager

## Setup

### Client

* adjust `variables.dev.ts` and `variables.prod.ts`.

### Server

* add an `ormconfig.json` file (make it match your settings):

```json
[
  {
    "name": "default",
    "autoSchemaSync": true,
    "entities": [
      "src/server/entities/*.ts"
    ],
    "driver": {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "postgres",
      "password": "postgres",
      "database": "aesir"
    }
  }
]
```

## Develop

### Client

* `npm run ionic:serve`
* edit `src/client`

### Server

* `npm run start:dev`
* edit `src/server`
