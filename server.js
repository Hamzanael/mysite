const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render('index', {});
});

app.get("/HamzaResume.pdf", (req, res) => {
res.download(__dirname+"/public/CV/Hamza's Resume.pdf")
});
app.listen(port || 3000, function () {
    console.log("system is work on" + 3000);
})