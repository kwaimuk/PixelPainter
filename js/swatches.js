var swatchContainer = document.createElement("div");
console.log(swatchContainer);

swatchContainer.id = "swatchContainer";
//test
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

for(var i=0; i<5; i++){
  var row = document.createElement("div");
  // row.className = "row"+i.toString();//"row0","row1"...
  swatchContainer.appendChild(row);
  for(var j=0; j<13; j++){
    var swatch = document.createElement("div");
    swatch.id = "row" + i + "swatch" + j;
    swatch.style.width = "25px";
    swatch.style.height = "25px";
    swatch.className = "swatch";
    swatch.style.border = "1px solid white";
    swatch.style.display = "table-cell";
    swatch.addEventListener("click", function (event){
      // console.log(event.target.style.background);
      console.log(pointerColor);
      pointerColor = event.target.style.background;
      console.log(pointerColor);
    // return pointerColor;
    });
    row.appendChild(swatch);
  }
}

// Can I use querySelectorAll and loop through to assign colors from another array to fill in our pallette?

var x = document.querySelectorAll(".swatch");
      var i;
      var colors = ["white", "silver","gray","black","red","marron","yellow","olive","lime","green","aqua","teal","blue","navy","fuchsia","purple"];
      for(i = 0; i< x.length; i++) {
         x[i].style.background = colors[i];
      }


      // var x = document.querySelectorAll(".swatch");
      // var i;
      // for(i = 0; i< x.length; i++) {
      //    x[i].style.background = "white";
      // }




// var pixelRed = document.getElementById("row0swatch0");
//   pixelRed.style.background = "red";

// var pixelBlue = document.getElementById("row0swatch1");
// pixelBlue.style.background = "blue";

// var pixelYellow = document.getElementById("row1swatch0");
// pixelYellow.style.background = "yellow";

// var pixelGreen = document.getElementById('row1swatch1');
// pixelGreen.style.background = "green";




