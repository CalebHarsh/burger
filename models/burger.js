var orm = require("../config/orm.js")

var burger = {
  //read all values inside database
  selectAll: function () {
    return orm.selectAll("burgers")
  },  
  //insert a new value into database
  newBurger: function (newBurg) {
    return orm.insertOne("burgers", "burger_name", newBurg)
  },
  //update a value into the database
  devour: function(id) {
    return orm.updateOne("burgers", "devoured", true, id)
  }
}
// burger.devour(10)

module.exports = burger