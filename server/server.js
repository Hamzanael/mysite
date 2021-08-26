const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/router");
const port = process.env.PORT;
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));
app.set("view engine", "ejs");
router(app);

app.listen(port || 3000, function () {
    console.log("system is work on" + 3000);
})