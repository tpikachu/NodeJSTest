# NodeJS Test Task

The main goal of the task is to show your skills in the best way possible. Please use interfaces, write both unit- and functional tests.

-   Everything will be run on terminal, no UI is needed.

## Part one - nodeJS rest API

You should implement a nodeJS server API communicating with this: https://reqres.in/ API. Your API should have three endpoints:

-   GET http://localhost:3000/api/user/{userId} - This will make a request to https://reqres.in/api/users/{userId} and returns an user JSON representation.

-   GET http://localhost:3000/api/user/{userId}/avatar - This will make a request to get the image by `avatar` URL. It should do 2 things: Save the image into the FileSystem (plain file) and return back base64 image representation. When another request with the same URL comes in, the server should not make a HTTP call to get the image, but should return the previously saved file in base64 format.

-   DELETE http://localhost:3000/api/user/{userId}/avatar - This will remove the file from the FileSystem storage. When a new GET http://localhost:3000/api/user/{userId} comes in, it requires a new HTTP call to get image and has to save to the fileSystem (plain file).

## Part two - implement a CRON job to scrap the users

Use this: https://reqres.in/api/users?page={page} to get the list of users and store them into a file in JSON Format. Each 1 minute a cron job should scrap the next page and append users into existing file in JSON format.

# Finished? Checklist

-   Implemented tests
-   Implement cron task
-   Used classes, controllers, services and interfaces
-   Used devDependencies
-   Used typescript
-   Used correct error handlings
-   Project can be build and run properly (npm start and npm run scrap)
