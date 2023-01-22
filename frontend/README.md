# Frontend
A frontend project for adding, deleting and displaying amazing people. When adding an amazing person, the application will check if the person really is amazing and add it to the list only if the check passed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


### Tests
- To run the **unit tests** once in headless mode:

`npm run unit-tests-once`

- To run **End-To-End Tests with mocked service dependencies** (here the `backend` must be up and running on your local machine, more information [here](https://github.com/AmazingITorg/amazing-people/blob/master/backend/README.md)):

`npm run e2e-mocked`


- To run **End-To-End Tests without mocked dependencies**. (here the `backend` **AND** the [`amazingness-service`](https://github.com/AmazingITorg/amazingness-service) must be up and running on your local machine, more information [here](https://github.com/AmazingITorg/amazing-people/blob/master/backend/README.md) and [here](https://github.com/AmazingITorg/amazingness-service/blob/main/README.md)):

`npm run e2e-unmocked`
