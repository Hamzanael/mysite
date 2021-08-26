const admin = (app) => {
    app.get("/adminAddProjectDetails", (req, res) => res.render('projects-form', {title: "project"}));
}
module.exports = admin;