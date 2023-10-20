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

## DB Design

    -Airplane Table
    -Flight Table
    -City
    -A flight belongs to an airplane but one airplane can be used in multiple flights.
    -A city has many airports but one airport belongs to a city.
    -One airport can have many flights but a flight belongs to one airport.
