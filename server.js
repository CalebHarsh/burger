var express = require("express")
var bodyParser = require("body-parser")

var app = express();
var PORT = process.env.PORT || 3000;

//setup static files
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Handelbars Setup
var exphbs = require("express-handlebars")
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

//routing
var routes = require("./controllers/burger_controller.js")

app.use(routes)

//Connect to port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})