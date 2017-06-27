
var pointerColor = "blank";
var swatchModule = (function(){

  function swatchContainer(){
console.log("title"+pixelPainter);
    var container = document.createElement("div");
    container.id = "container";
    pixelPainter.appendChild(container);

  }

  function swatches(){
    for(var i=0; i<10; i++){
      var row = document.createElement("div");
     container.appendChild(row);
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
          console.log(pointerColor);
          });
        row.appendChild(swatch);
        }
    }
    // Assign color values
    var x = document.querySelectorAll(".swatch");
    var i;
    var colorArr = ["black" ,"navy" ,"darkblue" ,"mediumblue" ,"blue" ,"darkgreen" ,"green" ,"teal" ,"darkcan" ,"forestgreen" ,"seagreen" ,"darkslategray" ,"darkviolet" ,"palegreen" ,"darkorchid" ,"yellowgreen" ,"sienna" ,"brown" ,"darkgray" ,"lightsteelblue" ,"powderblue" ,"firebrick" ,"darkgoldenrod" ,"mediumorchid" ,"rosybrown" ,"darkkhaki" ,"silver" ,"mediumvioletred" ,"indianred " ,"peru" ,"chocolate" ,"tan" ,"lightgray" ,"lightgrey" ,"thistle" ,"orchid" ,"goldenrod" ,"palevioletred" ,"crimson" ,"darksalmon" ,"violet" ,"palegoldenrod" ,"lightcoral" ,"khaki" ,"aliceblue" ,"honeydew" ,"azure" ,"sandybrown" ,"wheat" ,"beige" ,"whitesmoke" ,"mintcream" ,"ghostwhite" ,"salmon" ,"antiquewhite" ,"linen" ,"lightgoldenrodyellow" ,"oldlace" ,"red" ,"fuchsia" ,"magenta" ,"deeppink" ,"orangered" ,"tomato" ,"hotpink" ,"coral" ,"darkorange" ,"lightsalmon" ,"orange" ,"lightpink" ,"pink" ,"gold" ,"peachpuff" ,"navajowhite" ,"moccasin" ,"bisque" ,"mistyrose" ,"blanchedalmond" ,"papayawhip" ,"lavenderblush" ,"seashell" ,"cornsilk" ,"lemonchiffon" ,"floralwhite" ,"snow" ,"yellow" ,"lightyellow" ,"ivory" ,"white"
];

    for(i = 0; i< x.length; i++) {
       x[i].style.background = colorArr[i];
    }
  }

    return {
    swatchContainer: swatchContainer,
    swatches: swatches
  };

})();



