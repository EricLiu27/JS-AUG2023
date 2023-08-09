# Backend with db
- [Notes on mongo shell](./mongoose.md) (OPTIONAL)
- [Folder structure](#folder-structure)
- [server.js](#serverjs)
- [.env \& mongoose.config.js](#env--mongooseconfigjs)
- [destination.model.js](#destinationmodeljs)
- [Backbone for controller \& routes](#backbone-for-controller--routes)
  - [destination.controller.js](#destinationcontrollerjs)
  - [destination.routes.js](#destinationroutesjs)
- [CRUD logic in controller](#crud-logic-in-controller)
  - [Read all](#read-all)
  - [Find one](#find-one)
  - [Create](#create)
  - [Update](#update)
  - [Delete](#delete)


## Folder structure
- projectFolder
  - server
    - configs
    - controllers
    - models
    - routes
  - .env
  - package.json
  - server.js
- There are 4 folders inside the server -- configs, controllers, models, routes
- server.js is the entry point that import the configs to connect to database, and import routes (which imports controller, which imports model)

## server.js
- server.js is the entry point. Finish up step 1, 2, 3 first to get it up and running. Follow the platform or the lecture demo for backend_folder
```js
// 1. import all dependencies  
// - express, create app with express, .env (THIS IS NEW)

// 4. import mongoose.config (after config is complete)

// 2. configure express with app.use

// 5. import routes (after routes are done -- may need to complete the models & the backbone of the controller first)

// 3. listen to the port at the end

```

## .env & mongoose.config.js
- On the root directory of the server, create a file named .env for sensitive information (could be your uri, username, pw)
- (DO NOT ADD SPACE/"" FOR .ENV)

- Create mongoose.config file to connect to the database. 
```js
// 1. import mongoose
// 2. create a uri variable that shows the connection url. 
// 2.1 Make sure you use .env for the sensitive information like the link or password or username
// 2.2 Make sure you console log and check if the route is good before you connect to the database. 

const uri = ``

// 3. When connecting to the database, check your server terminal for the successful connection message. 
// Check the code from the platform
// You may need to go to Atlas to update the IP access

```
- After the config file, go back to server.js and require this file. If mongodb is connected, you will see the message on the terminal. 
- If it breaks after you require the file, STOP and fix the issue before you move on. 

## destination.model.js
- Follow the platform (Express+ mongoose or Validations) for the code. 
- Complete the Schema (similar to an ERD)
- Create a model from the schema & export it
```js
// 1. import mongoose
const mongoose = require("mongoose");

// 2.1 create the schema with all keys & validation
const DestinationSchema = new mongoose.Schema({
    

}, {}) // 2.2 enable the timestamp for createdAt & updatedAt


// 3. create a mongoose model based on the schema & export it

```

## Backbone for controller & routes
- server <-- routes <-- controller <-- model
- As Server needs routes, routes needs controller, highly recommend to complete the backbone of controller & routes first to make sure import/export is good. 
### destination.controller.js
```js
// 1. import the model

// 2. export all the functions with placeholder
module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// Example: 
module.exports.allDest = (req, res)=>{
    // CODE TO BE COMPLETED
}


```

### destination.routes.js
```js
// 1. import the controller

// 2. export a function that reads one argument (app)
// 3. include all the routes with the corresponding logic from controller
```
- Once routes & controller backbone are there, require the route function in server.js and call it with app. 
- If it breaks, STOP and fix it before you move on. 

## CRUD logic in controller
- Complete the CRUD logic. 
- When using User.find(), make sure you are able to see the option of .find() on the code suggestion. If you cannot find it, the model may not be imported correctly. STOP and fix it before you write more code. 
- Test the route when you finish each logic. (Code a little bit and test!)

### Read all
- get all destinations from database with and send the json response out at the .then
- HINT: User.find()

### Find one
-  get the ID from backend params, 
- Make use of the id, get that destination from database and send the json response out
- HINT: User.findOne(criteria in key-value pair)

### Create 
- get the formData from req.body
- create the destination based on the request body. Send the json respnose out
- HINT: User.create(___) 

### Update
- use the id from backend params, get the req.body 
- complete findOneAndUpdate function with 3 arguments -- criteria in an object, request body, options wrapped in an object

### Delete
- use the id from params and delete the item
- HINT: User.deleteOne



