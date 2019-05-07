//declared variables

var height, width, color;

// call makeGrid() on submit event
$("#sizePicker").submit(function (event) {
  event.preventDefault();
  // get entered dimensions
  height = $("#inputHeight").val();
  width = $("#inputWidth").val();
  makeGrid(height, width);
})


function makeGrid(x, y) {
  // remove existing grid if applicable
  $("tr").remove();

  // loop to create Grid
  for (var r = 1; r <= x; r++) {
    $("#pixelCanvas").append("<tr id=table" + r + "></tr>");
      for (var c = 1; c <= y; c++) {
        $("#table" + r).append("<td></td>");
      }
  }

  // event listener for color
  $("td").click(function addColor() {
    color = $("#colorPicker").val();
    // logic to remove existing br color and replace with picked color
    if ($(this).attr("style")) {
      $(this).removeAttr("style")
    } else {
      $(this).attr("style", "background-color:" + color);
    }
  })
}
