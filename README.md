# Welcome to Flights Services

## Project Setup

-Clone the project on your system
-Execute 'npm install'

- Create a '.env' file in root directory and add the following environment variables -`PORT=3000`
  -Insise the `src/config` folder create a new file `config.json` and then add the the following json
  ```
  {
  "development": {
  "username": "<YOUR_DB_LOGIN_NAME>",
  "password": "<YOUR-DB-PASSWORD>",
  "database": "Flight_Search_DB",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  ```
  -Once you have added your db config as listed above, go to the scr folder from your terminal and execute `npx sequelize db:create`
  and then do `npx sequelize db:migrate`.

## DB Design

    -Airplane Table
    -Flight Table
    -City
    -A flight belongs to an airplane but one airplane can be used in multiple flights.
    -A city has many airports but one airport belongs to a city.
    -One airport can have many flights but a flight belongs to one airport.

## Tabels

### City -> id,name,create_at and updated_at

### Airport -> id,name,address,city_id,created_at,updated_at

Relationship -> City has many airports and Airports belongs to a city (one to many relation).

```
npx sequelize mode:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize db:migrate
```

To seed into seeders folder use :`npx sequelize seed:generate --name add-airports` command inside your scr folder.
To seed all your data inside your database do:`npx sequelize db:seed:all`.
