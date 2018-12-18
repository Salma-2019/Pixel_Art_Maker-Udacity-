// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!S

document.getElementById('sizePicker').addEventListener('submit', function(event) {

  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  var row = document.getElementById("inputHeight").value;
  var col = document.getElementById("inputWidth").value;
  var canvas = document.getElementById("pixelCanvas");
  var color = document.getElementById("colorPicker");
  canvas.innerHTML = '';

  for (var i = 0; i <= row; i++) {
    var newRow = canvas.insertRow(i);

    for (var j = 0; j <= col; j++) {
      var newCell = newRow.insertCell(j);


      newCell.addEventListener('click', function(addColor) {
        addColor.target.style.backgroundColor = color.value;
      })
      newCell.addEventListener("contextmenu", function(addColor) {
        addColor.target.style.backgroundColor = "white";
      })

    }
  }
};

document.addEventListener("contextmenu", hideMenu, false);

function hideMenu(e) {
  e.preventDefault();
}
