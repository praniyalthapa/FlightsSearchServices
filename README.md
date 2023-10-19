#Welcome to Flights Services
##Project Setup
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
