const resume = require("../handlers/resume");
const contact = require("../handlers/contact");
const projects = require("../handlers/projects");
const formHandler = require("../forms-handler/formHandler");
const main = require("../handlers/main");
const admin = require("../handlers/admin");
const router = (app) => {
    main(app)
    resume(app);
    contact(app);
    projects(app);
    formHandler(app);
    admin(app);
}
module.exports = router;