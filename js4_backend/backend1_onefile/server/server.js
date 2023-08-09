// 1. import all dependencies
const express = require("express") // import express from "express"
const app = express()

// 2. configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 3. routes & logic
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

app.get("/api/testing", (req, res)=>{
    res.json({message: "hello"});
})
// HTTP verb: GET, POST, DELETE, PUT
// all users
app.get("/api/users", (req, res)=>{
    res.json(users)
})

// get one user
app.get("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    res.json(users[paramsId])
})

// create a user based on the request body
app.post("/api/users", (req, res)=>{
    const reqBody = req.body
    users.push(reqBody);
    res.json(reqBody)
})

// update a user based on the request body
app.put("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    users[paramsId] = req.body;
    res.json(users[paramsId]);
})

// delete a user based on the id
app.delete("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id;
    users.splice(paramsId, 1);
    res.json({status: "ok"});
})


// 4. listen to the port
app.listen(8000, ()=>console.log(`Listening on port: 8000`))
