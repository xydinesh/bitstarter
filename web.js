var express = require("express");
var fs = require("fs");
var app = express();
var indexFile = "index.html"

var buffer = new Buffer(fs.readFileSync(indexFile));
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
