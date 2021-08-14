const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/CV', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const projectSchema = new mongoose.Schema({
    title: String,
    images: [],
    description: String,
    category: String,
    client: String,
    ProjectDate: String,
    code: String
});
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
})

const Project = new mongoose.model("project", projectSchema);
const Contact = new mongoose.model("contact", contactSchema);

module.exports = {
    Project,
    Contact
}