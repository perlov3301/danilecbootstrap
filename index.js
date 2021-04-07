var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("docs"));
// viewed at http://localhost:8080
app.get("/", function(req, res) {
    console.log("index.js app.get('/', res.sendFile('/index.html'))");
    res.sendFile(path.join(__dirname + "/docs/index.html"));
});
app.get("/nav", function(req, res) {
    console.log("index.js app.get('/nav', res.sendFile('/docs/nav.html')");
    res.sendFile(path.join(__dirname + "/docs/nav.html"));
});
app.listen(8080, () => { console.log("listen on port 8080"); });