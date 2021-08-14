const {Contact} = require("./database");
const email = require("./email.js");
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
            email({message: data.message, subject: data.subject, name: data.name, email: data.email});

        });
    });
}

module.exports = contact;

