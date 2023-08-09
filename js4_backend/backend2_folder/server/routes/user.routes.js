const UserController = require("../controllers/user.controller")

module.exports = (app)=>{
    app.get("/api/testing", UserController.testAPI)
    app.get("/api/users", UserController.allUsers)
    app.get("/api/users/:id",UserController.oneUser )
    app.post("/api/users", UserController.createUser)
    app.put("/api/users/:id", UserController.updateUser)
    app.delete("/api/users/:id", UserController.deleteUser)   
}



