var orm = require("../config/orm.js")

var burger = {
  //read all values inside database
  selectAll: function () {
    orm.selectAll("burgers").then(data => {
      data.forEach(item => {
        console.log(item)
      })
    })
  },  
  //insert a new value into database
  newBurger: function (newBurg) {
    orm.insertOne("burgers", "burger_name", newBurg/*variable value for new burger*/)
      .then(() => orm.selectAll("burgers"))
      .then(data => {
        data.forEach(item => {
          console.log(item)
        })
      })
  },
  //update a value into the database
  devour: function(id) {
    orm.updateOne("burgers", "devoured", true, id/*variable value for id */)
  }
}

module.exports = burger