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

var pointerColor = "blank";
var colorArr = ["rgb(153,0,0)", "rgb(204,0,0)", "rgb(255,0,0)", "rgb(255,51,51)", "rgb(255,102,102)","rgb(153,76,0)"];

for(var i=0; i<10; i++){
  var row = document.createElement("div");
  swatchContainer.appendChild(row);
  for(var j=0; j<5; j++){
    var swatch = document.createElement("div");
    swatch.id = "row" + i + "swatch" + j;
    swatch.className = "swatch";
    swatch.style.width = "25px";
    swatch.style.height = "25px";
    swatch.style.border = "1px solid white";
    swatch.style.display = "table-cell";
    swatch.addEventListener("click", function (event){
      pointerColor = event.target.style.background;
    });
    row.appendChild(swatch);
    }
}


// Assign color values:

for (var k = 0; k<colorArr.length; k++) {
  console.log(colorArr[k]);
}

var swatches = document.getElementsByClassName("swatch");
console.log(swatches);
for (var i = 0; i < swatches.length; i++) {
  swatches[i].style.background = colorArr[k].toString();
}



// Can I use querySelectorAll and loop through to assign colors from another array to fill in our pallette?

// var pixelRed = document.getElementById("row0swatch0");
//   pixelRed.style.background = "red";

// var pixelBlue = document.getElementById("row0swatch1");
// pixelBlue.style.background = "blue";

// var pixelYellow = document.getElementById("row1swatch0");
// pixelYellow.style.background = "yellow";





