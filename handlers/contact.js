const {Contact} = require("./database");
const contact = (app) => {

    app.post("/contact", (req, res) => {
        const data = req.body;
        console.table(data)
        const newContact = Contact({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        });
        newContact.save(() => {
            res.sendStatus(202);
        });
    });
}

module.exports = contact;

