// 1. import all dependencies
const express = require("express") // import express from "express"
const app = express()

// 2. configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 3. routes & logic
const routes = require("./routes/user.routes")
routes(app)

// 4. listen to the port
app.listen(8000, ()=>console.log(`Listening on port: 8000`))
