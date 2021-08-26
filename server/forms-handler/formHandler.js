const storage = require("../connectors/storage");
const {Project} = require("../connectors/database");

const formHandler = (app) => {
    app.post("/newProject", storage.array("projectImages", 10), (req, res) => {
        const data = req.body;
        let images = req.files.map(image => "/projectImages/" + image.originalname);
        console.table(images);
        const project = new Project({
            title: data.name,
            images: images,
            description: data.description,
            category: data.category,
            client: data.client,
            ProjectDate: data.ProjectDate,
            code: data.code
        });
        project.save(() => {
            res.redirect("/adminAddProjectDetails");
        });
    });
}

module.exports = formHandler;