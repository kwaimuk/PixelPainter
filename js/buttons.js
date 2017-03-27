// 2 buttons

// Erase - Assigning pointerColor to beige
// Clear - Assign all canvas ids to beige
//test
var buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  //canvas.insertBefore(buttonContainer,cavas.childNodes[0]);
  pixelPainter.appendChild(buttonContainer);


  var erase = document.createElement("button");
    erase.id = "erase";
    erase.innerHTML = "Erase";
    erase.addEventListener("click",function(event){
      pointerColor = "white";
  });

  buttonContainer.appendChild(erase);


  var clear = document.createElement("button");

    clear.id = "clear";
    clear.innerHTML = "Clear";
    clear.addEventListener("click",function(event){
      console.log(event.target.id);
      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
         x[i].style.background = "white";
      }
  });
  buttonContainer.appendChild(clear);

  var litebrite = document.createElement("button");

    litebrite.id = "litebrite";
    litebrite.innerHTML = "Lite•Brite";

    function mode(){
      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
        x[i].style.backgroundColor = "dimgray";
         x[i].className = "roundedCorners";
      }



      // x.style.border-radius = 50%;
      var t = document.getElementById("title");
      t.style.textShadow = "1px 1px 2px black, 0px 0px 25px goldenrod, 0px 0px 15px goldenrod";
      t.innerHTML = "Lite•Brite";

      document.body.style.background = "black";


  }
    litebrite.addEventListener("click",mode,true);
    litebrite.removeEventListener("dblclick",mode,true);


  buttonContainer.appendChild(litebrite);

  var normalmode = document.createElement("button");
      normalmode.id = "normal";
      normalmode.innerHTML = "normal";
      normalmode.removeEventListener("click",mode,false);
  buttonContainer.appendChild(normalmode);






