const Task = require("../models/task.model");
// Create and Save a task
exports.createTask = (req, res) => {
  // Validate request
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({
      error: "Bad request",
    });
  }
  // Create a task
  const task = new Task({
    task: req.body.task,
    status: 'pending',
    flag: false
  });
  // Save task in the database
  Task.create(task, (err, data) => {
  
    if (err)
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the task.",
      });
    else return res.redirect("home")
  });
};
// Retrieve all tasks
exports.getAllTasks = (req, res) => {
 Task.getAll((err, data) => {
    if (err)
      return res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks",
      });
    else {   return   res.render("index", {"data":data});}
  });
};


// Find a single task with a id
exports.getTask = (req, res) => {
  Task.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          error: `Not found task with id ${req.params.id}.`,
        });
      } else {
        return res.status(500).send({
          error: "Error retrieving task with id " + req.params.id,
        });
      }
    } else return res.send(data);
  });
};

   
// Update a task identified by the id in the request
exports.updateTask = (req, res) => {
  // Validate Request
  if (Object.keys(req.body).length === 0){
    return res.status(400).send({
      error: "Bad request",
    });
  }
  Task.updateById(req.params.id, new Task(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
       return res.status(404).send({
          error: `Not found`,
        });
      } else {
       return res.status(500).send({
          error: "Error updating task with id " + req.params.id,
        });
      }
    } else return res.send(data);
  });
};
// Delete a task with the specified id in the request
exports.deleteTask= (req, res) => {
  Task.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
       return res.status(404).send({
          error: `Not found`,
        });
      } else {
        return res.status(500).send({
          error: "Could not delete task with id " + req.params.id,
        });
      }
    } else return res.send({ message: `Task was deleted successfully` });
  });
};
