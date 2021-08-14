const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const app = express();
const contact = require("./handlers/contact");
const projects = require("./handlers/projects");
const resume = require("./handlers/resume");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");
resume(app);
contact(app);
projects(app);
app.get("/", (req, res) => res.render('index', {title: "Hamza's site"}));


app.get("/adminAddProjectDetails", (req, res) => res.render('projects-form', {title: "project"}));


app.listen(port || 3000, function () {
    console.log("system is work on" + 3000);
})