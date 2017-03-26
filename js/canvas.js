var canvas = document.createElement("div");
  canvas.id = "canvas";
  pixelPainter.appendChild(canvas);

var isMouseDown = false;
document.onmousedown = function() { isMouseDown = true;};
document.onmouseup   = function() { isMouseDown = false;};

  for(var i=0; i<50; i++){
    var row = document.createElement("div");
    // row.className = "row"+i.toString();//"row0","row1"...
    canvas.appendChild(row);

      for(var j=0; j<50; j++){
        var pixel = document.createElement("div");
        pixel.id = "row" + i + "pixel" + j;
        pixel.className = "pixel";
        pixel.style.width = "10px";
        pixel.style.height = "10px";
        pixel.style.border = "1px solid white";
        pixel.style.display = "table-cell";
        pixel.style.background = "beige";
        pixel.addEventListener("mouseover", function(event){
          console.log(event.target.id);
          console.log(pointerColor);
          if (isMouseDown === true){
          event.target.style.background = pointerColor;
          }
        });
        row.appendChild(pixel);
      }
}

function target(){
  return this.id;
  console.log(this.id);
}