# Task 1

:globe_with_meridians: :rocket: [LIVE APP](http://3.18.207.40/)

**NOTE:** [README First](/README.md)

### Requirements

- Java
- Maven
- Spring Boot (Framework)
- MongoDB
- Docker

#### Dependencies

- spring-boot-starter-web
- spring-boot-starter-data-mongodb
- spring-boot-maven-plugin

## Building steps

1. Open the folder `/task1` in your favourite IDE ( VS Code :heart:)
Wait for few minutes while the IDE loads and completes necessary pre-build tasks.

2. Run `mvn clean install`
This will build and install the artifacts in to the local repository.
Required jar file will be created inside `/target` folder.

3. Run the application by clicking `Run` option or pressing `F9`
SpringBoot application server will load and start on port `8080` of the `localhost`.

## Rest  API Endpoints and Resources
Rest API Endpoint is mapped to `http://127.0.0.1:8080/servers/`

- PUT a server	`http://127.0.0.1:8080/servers/createServer`
Accept "server" object in body in json format.

- GET servers	`http://127.0.0.1:8080/servers/getServer`
Returns a list of "server" objects.

- GET server	by ID	`http://127.0.0.1:8080/servers/getServer?id=<ID>`
Returns a  "server" object matching with ID.

- GET servers	by Name	`http://127.0.0.1:8080/servers/getServer?name=<Nmae>`
Returns a list of "server" objects matching with Name.

- DELETE server	`http://127.0.0.1:8080/servers/deleteServer?id=<ID>`
Deletes a  "server" object matching with ID.






## Consuming APIs

### Using Postman

Run the following created collection to Test and consume the APIs

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5ff40fbad3968a1b28b0)



