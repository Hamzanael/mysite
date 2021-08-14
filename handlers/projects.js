const projects = (app) => {

    app.get("/projects/:project", (req, res) => {
        const projectName = req.params.project;
    });

}

module.exports = projects;