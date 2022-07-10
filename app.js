const express = require("express");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("rewards");
});

app.get("/gift", function(req, res) {
    res.send("Gift Cards");
});

app.get("/menu", function(req, res) {
    res.send("Menu");
});

app.listen(3000, function() {
    console.log("Server is up and running");
})