var canvas = (function(){

  function pixelContainer(){

    var canvas = document.createElement("div");
      canvas.id = "canvas";
      var pixelPainter = document.getElementById("pixelPainter");
      pixelPainter.appendChild(canvas);

  }

  function pixels(){

    function target(){
      return this.id;
    }

    function createCanvas(){

      for(var i=0; i<100; i++){
        var row = document.createElement("div");
        // row.className = "row"+i.toString();//"row0","row1"...
        canvas.appendChild(row);

        for(var j=0; j<100; j++){
          var pixel = document.createElement("div");
          pixel.id = "row" + i + "pixel" + j;
          pixel.className = "pixel";
          pixel.style.width = "5px";
          pixel.style.height = "5px";
          pixel.style.border = "";
          pixel.style.display = "table-cell";
          pixel.style.background = "white";
          pixel.addEventListener("mouseover", function(event){
            console.log(event.target.id);
            console.log(pointerColor);
            if (isMouseDown === true){
            event.target.style.background = pointerColor;
            }
          });
          pixel.addEventListener("click", function(event){
            event.target.style.background = pointerColor;
          });
          row.appendChild(pixel);
        }
      }
    }
  }

  return {
    pixelContainer: pixelContainer,
    pixels: pixels
    };

})();


