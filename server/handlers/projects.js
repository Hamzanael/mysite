const {Project} = require("../connectors/database");
const projects = (app) => {

    app.get("/projects/:project", (req, res) => {
        const projectName = req.params.project;
        Project.findOne({title: projectName}, (error, project) => {
            res.render("project-details", {project: project, title: "Hamza's site"});
        });

    });

}

module.exports = projects;