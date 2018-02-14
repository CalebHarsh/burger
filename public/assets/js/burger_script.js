var plate_full = false

$(".form-select").on("submit", function (e) {
  e.preventDefault()
  console.log($("#burger").val())
  if ($("#burger").val() != 0) {
    var burgerObj = {
      burger_name: $("#burger").val()
    }
    var burgImg = burgerObj.burger_name.toLowerCase().replace(" ", "_") + ".jpg"
    console.log(burgImg)
    $.ajax("api/burgers", {
      type: "POST",
      data: burgerObj
    }).then(res => {
      $(".select").data("id", res)
      $(".select img").attr("src", "assets/imgs/" + burgImg)
    })
  } else {
    alert("Please Pick a Burger First")
  }
})

$("#move-plate").on("click", function (e) {
  var id = $(".select").data("id")
  if (!plate_full) {
    var src = $(".select img").attr("src")
    $(".eat").data("id", id)
    $(".eat img").attr("src", src)
    $(".select img").attr("src", "assets/imgs/none.jpg")
    $(".select").data("id", null)
    plate_full = true
  } else {
    alert("Eat everything on your plate first")
  }
})

$("#devoured").on("click", function (e) {
  if (plate_full) {
    var id = $(".eat").data("id")
    $.ajax("api/burger/" + id, {
      type: "PUT"
    }).then(res => {
      $(".eat img").attr("src", "assets/imgs/none.jpg")
      $(".eat").data("id", null)
      plate_full = false
    })
  } else {
    alert("You most first move a burger to a your plate")
  }

})