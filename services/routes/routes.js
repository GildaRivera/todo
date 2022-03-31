const task = require("../controllers/task.controller")
module.exports = routes => {
    //const task= require("");

    var router = require("express").Router();
    // TASK

    // Create a new task
    router.post("/task", task.createTask);
    // Retrieve all tasks
    router.get("/home", task.getAllTasks);
    // Retrieve a single task with id
    router.get("/task/:id",task.getTask);
    // Update a task with id
    router.put("/task/:id", task.updateTask);
    // Delete a task with id
    router.delete("/task/:id", task.deleteTask);



    routes.use('', router);
  };