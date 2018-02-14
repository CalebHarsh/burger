var connection = require("./connection.js")

var orm = {
  selectAll: function (tableSel) {
    return new Promise((resolve, reject) => {
      var queryString = "SELECT * FROM ??"
      connection.query(queryString, [tableSel], (err, data) => {
        if (err) reject(err)
        console.log("All data read")
        resolve(data)
      })
    })

  },
  insertOne: function (tableSel, colSel, colVal) {
    return new Promise((resolve, reject) => {
      var queryString = "INSERT INTO ?? (??) VALUES (?)"
      connection.query(queryString, [tableSel, colSel, colVal], (err, data) => {
        if (err) throw err;
        console.log("Value inserted into table", data.insertId)
        resolve(data.insertId)
      })
    })

  },
  updateOne: function (tableSel, colSel, colVal, id) {
    return new Promise((resolve, reject) => {
      var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
      connection.query(queryString, [tableSel, colSel, colVal, id], (err, data) => {
        if (err) throw err;
        console.log("Table entry updated", data)
        resolve()
      })
    })
  }

}

module.exports = orm