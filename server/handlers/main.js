const {Project} = require("../connectors/database");
const main = (app) => {
   // Project.find({}, (error, project) => {
        app.get("/", (req, res) => res.render('index', {title: "Hamza's site"}));
   // })

}
module.exports = main;