// 2 buttons

// Erase - Assigning pointerColor to beige
// Clear - Assign all canvas ids to beige

var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  //canvas.insertBefore(buttonContainer,cavas.childNodes[0]);
  pixelPainter.appendChild(buttonContainer);


  var erase = document.createElement("button");
    erase.id = "erase";
    erase.innerHTML = "erase";
    erase.addEventListener("click",function(event){
      pointerColor = "white";
  });

  buttonContainer.appendChild(erase);


  var clear = document.createElement("button");

    clear.id = "clear";
    clear.innerHTML = "clear";
    clear.addEventListener("click",function(event){
      console.log(event.target.id);
      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
         x[i].style.background = "white";
      }
  });
  buttonContainer.appendChild(clear);





