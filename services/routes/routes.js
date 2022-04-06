const task = require("../controllers/task.controller")
module.exports = routes => {
    //const task= require("");

    var router = require("express").Router();
    // TASK
    // Create a new task
    router.get("/home", (req,res)=> res.render("index"));
    // Create a new task
    router.post("/home", task.createTask);
    // Retrieve all tasks
    router.get("/task", task.getAllTasks);
    // Retrieve a single task with id
    router.get("/home/:id",task.getTask);
    // Update a task with id
    router.put("/home/:id", task.updateTask);
    // Delete a task with id
    router.delete("/home/:id", task.deleteTask);



    routes.use('', router);
  };