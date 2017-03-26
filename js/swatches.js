var swatchContainer = document.createElement("div");
console.log(swatchContainer);

swatchContainer.id = "swatchContainer";

pixelPainter.appendChild(swatchContainer);

 class Swatch{
  constructor(id, clss, colorValue){
    this._id = id;
    //this is class
    this.clss = clss;
    this._colorValue = colorValue;
    this.height = 25;
    this.width = 25;
   }
}
// var testSwatch = new Swatches(1,"#4682b4");
// console.log(testSwatch);
var pointerColor = "blank";

for(var i=0; i<2; i++){
  var row = document.createElement("div");
  // row.className = "row"+i.toString();//"row0","row1"...
  swatchContainer.appendChild(row);
  for(var j=0; j<2; j++){
    var swatch = document.createElement("div");
    swatch.id = "row" + i + "swatch" + j;
    swatch.style.width = "25px";
    swatch.style.height = "25px";
    swatch.style.border = "1px solid black";
    swatch.style.display = "table-cell";
    swatch.addEventListener("click", function(event){
      // console.log(event.target.style.background);
      console.log(pointerColor);
      pointerColor = event.target.style.background;
      console.log(pointerColor);
    // return pointerColor;
    });
    row.appendChild(swatch);
  }
}

var pixelRed = document.getElementById("row0swatch0");
  pixelRed.style.background = "red";

var pixelBlue = document.getElementById("row0swatch1");
pixelBlue.style.background = "blue";

var pixelYellow = document.getElementById("row1swatch0");
pixelYellow.style.background = "yellow";

var pixelGreen = document.getElementById('row1swatch1');
pixelGreen.style.background = "green";




