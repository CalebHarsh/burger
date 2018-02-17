var mysql = require("mysql")
var connection

if (process.argv.JAWSDB_URL) {
  connection = mysql.createConnection(process.argv.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db",
    port: 3306
  })
}


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection
