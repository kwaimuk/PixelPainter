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

    for(var i = 0; i < 10; i++){
      //go to each row[i]
      for(var j = 0; j < 10; j++){
        //go to each pixel row[i]pixel[j]
        document.getElementById("row"+[i]+"pixel"+[j]).style.background = "beige";
        //assign style.background to beige
      }
    }
  });
  buttonContainer.appendChild(clear);





