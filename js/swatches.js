
var pointerColor = "blank";

var swatchContainer = (function(){
  document.createElement("div");
  swatchContainer.id = "swatchContainer";
  pixelPainter.appendChild(swatchContainer);

})();

var swatches = (function() {

  for(var i=0; i<10; i++){
    var row = document.createElement("div");
    swatchContainer.appendChild(row);
      for(var j=0; j<5; j++){
        var swatch = document.createElement("div");
        swatch.id = "row" + i + "swatch" + j;
        swatch.className = "swatch";
        swatch.style.width = "25px";
        swatch.style.height = "25px";
        swatch.className = "swatch";
        swatch.style.border = "1px solid white";
        swatch.style.display = "table-cell";
        swatch.addEventListener("click", function (event){
        pointerColor = event.target.style.background;
        });
      row.appendChild(swatch);
      }
  }
  // Assign color values
  var x = document.querySelectorAll(".swatch");
  var i;
  var colorArr = ["rgb(153,0,0)", "rgb(204,0,0)", "rgb(255,0,0)", "rgb(255,51,51)", "rgb(255,102,102)","rgb(153,76,0)"];

  for(i = 0; i< x.length; i++) {
     x[i].style.background = colors[i];
  }
})();





