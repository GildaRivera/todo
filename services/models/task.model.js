const sql = require("./connection");
// constructor
const Task= function(task) {
    this.task = task.task
    this.status=task.status

};
Task.create = (newTask, result) => {
  sql.query("INSERT INTO task SET ?", newTask, (err, res) => {
    if (err) {
      return result(err, null);
    }
    return result(null, { id: res.insertId, ...newTask});
  });
};
Task.findById = (id, result) => {
  sql.query(`SELECT * FROM task WHERE id = ${id}`, (err, res) => {
    if (err) {
      return result(err, null);
    }
    if (res.length) {
      return result(null, res[0]);
    }
    // not found task with the id
 
    result({ kind: "not_found" }, null);
  });
};
Task.getAll = (result) => {
  let query = "SELECT * FROM task";
  sql.query(query, (err, res) => {
    if (err) {
     return result(null, err);
    }
   
   return  result(null, res);
  });
};

Task.updateById = (id, task, result) => {
  sql.query(
    "UPDATE task SET task = ?, status = ? WHERE id = ?",
    [task.task, task.status,id],
    (err, res) => {
      if (err) {
        return result(null, err);
      }
      if (res.affectedRows == 0) {
        return result({ kind: "not_found" }, null);
      }
      return result(null, { id: id, ...task });
    }
  );
};
Task.remove = (id, result) => {
  sql.query("DELETE FROM task WHERE id = ?", id, (err, res) => {
    if (err) {
     return result(null, err);
    }
    if (res.affectedRows == 0) {
     return result({ kind: "not_found" }, null);

    }
    return result(null, res);
  });
};

module.exports = Task;