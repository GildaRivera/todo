const express = require("express");
const cors = require("cors");
const tasks = require("./services/controllers/task.controller")
const app = express();
var corsOptions = {
  origin: "http://localhost:3030"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.get("/home", (req, res) => {
//   res.render("index", {content});
// });

// const content = require("./content/cards.json");
require("./services/routes/routes.js")(app)


// Middlewares

app.use(express.static("public"));

// Templating engine setup

app.set("view engine", "ejs");

// Enpoints



// Starting server.

app.listen(3030, () => {
  console.log("Listening on port 3030...");
});

