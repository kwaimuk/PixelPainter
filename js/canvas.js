var canvas = document.createElement("div");
  canvas.id = "canvas";
  pixelPainter.appendChild(canvas);

var isMouseDown = false;
document.onmousedown = function() { isMouseDown = true;};
document.onmouseup   = function() { isMouseDown = false;};

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

function target(){
  return this.id;
  console.log(this.id);
}

      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
         x[i].style.cursor = "pointer";
      }
