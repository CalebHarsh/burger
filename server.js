var express = require("express")
var methodOverride = require("method-override")
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});