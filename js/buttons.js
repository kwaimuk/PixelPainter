// 2 buttons

// Erase - Assigning pointerColor to beige
// Clear - Assign all canvas ids to beige

var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  pixelPainter.appendChild(buttonContainer);

  var erase = document.createElement("button");
  erase.id = "erase";
  erase.innerHTML = "erase";
  erase.addEventListener("click",function(event){
    pointerColor = "beige";
  });

  buttonContainer.appendChild(erase);


  var clear = document.createElement("button");
  clear.id = "clear";
  clear.innerHTML = "clear";
  clear.addEventListener("click",function(event){
  console.log(event.target.id);
  });
  buttonContainer.appendChild(clear);


