const content = require("../../content/cards.json");

module.exports = routes => {
    //const task= require("");

    var router = require("express").Router();
    // TASK

    // Create a new task
    router.post("/task", ()=>{console.log("--");return {"ss":2}});
    // Retrieve all tasks
    router.get("/task",
    
    (req, res) => {
    
            return res.status(500).send({
              message: "Some error occurred while retrieving users",
            });
        }
    
    );
    // Retrieve a single task with id
    router.get("/task/:id",()=>{});
    // Update a task with id
    router.put("/task/:id", ()=>{});
    // Delete a task with id
    router.delete("/task/:id", ()=>{});



    routes.use('/api', router);
  };