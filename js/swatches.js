var swatchContainer = document.createElement("div");
console.log(swatchContainer);

swatchContainer.id = "swatchContainer";

pixelPainter.appendChild(swatchContainer);

 class Swatches{
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

//if we change "2"
for(var i=0; i<10; i++){
  var row = document.createElement("div");
  // row.className = "row"+i.toString();//"row0","row1"...
  swatchContainer.appendChild(row);
  for(var j=0; j<10; j++){
    var swatch = document.createElement("div");
    swatch.id = i+"swatch"+j;
    swatch.style.width = "25px";
    swatch.style.height = "25px";
    swatch.style.border = "1px solid black";
    swatch.style.display = "table-cell";

    row.appendChild(swatch);
  }

console.log(row);
console.log(swatch);
}

