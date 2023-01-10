## A people project for saving and displaying amazing people

To start the application locally, a postgres database must be up and running. Here an example on how to do this easily on your local machine:
`docker run --name postgresDbContainer -p 6432:5432 -e POSTGRES_PASSWORD=postgresPasswort -e POSTGRES_USER=postgresUser -e POSTGRES_DB=peopledb -d postgres:latest`

To run the application in dev mode and set all the environmental variables, run the following:

1. Set the flyway config to the values from the postgres docker container: `npm run set-flyway-dev`
2. Before starting the application execute the db migrations through `npm run migrate`
3. To start the application run `npm run start-dev`

To run the unit tests:
`npm run unit-tests`
To run the integration tests:
`npm run integration-tests` (be sure to set the environmental variables)
