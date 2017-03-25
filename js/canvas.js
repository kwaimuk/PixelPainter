var canvas = document.createElement("div");
  canvas.id = "canvas";
  pixelPainter.appendChild(canvas);

  for(var i=0; i<10; i++){
    var row = document.createElement("div");
    // row.className = "row"+i.toString();//"row0","row1"...
    canvas.appendChild(row);

      for(var j=0; j<10; j++){
        var pixel = document.createElement("div");
        pixel.id = "row" + i + "pixel" + j;
        pixel.style.width = "25px";
        pixel.style.height = "25px";
        pixel.style.border = "1px solid black";
        pixel.style.display = "table-cell";
        pixel.style.background = "beige";
        pixel.addEventListener("click", function(event){
          console.log(event.target.id);
          console.log(pointerColor);
          event.target.style.background = pointerColor;
        });
        row.appendChild(pixel);
      }
}

function target(){
  return this.id;
  console.log(this.id);
}