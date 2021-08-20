const mongoose = require("mongoose");

mongoose.connect('mongodb://hamzacv:YnEWWT6RTguGsfiSeUaH71lvbyKihSWTAifryc0LwBmvHv6VgZ31LoYMjqCLJxfAm6CUn0BRYUFOo0pIYPbIvg==@hamzacv.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@hamzacv@/cv', {
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