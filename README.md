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

### Running

* `npm run start:dev`

### Client

* edit `src/client`

### Server

* edit `src/server`
