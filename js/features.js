
var features = (function(){
    var isNormal =true;

  function buttonContainer(){
    var container = document.createElement("div");
    container.id = "buttonContainer";
    //canvas.insertBefore(buttonContainer,cavas.childNodes[0]);
    pixelPainter.appendChild(container);
  }


  function eraseButton(){
    var erase = document.createElement("button");
    erase.id = "erase";
    erase.innerHTML = "Erase";
    erase.addEventListener("click",function(event){
        pointerColor = "white";
    });

    container.appendChild(erase);
  }

  function clearButton(){
    var clear = document.createElement("button");
    clear.id = "clear";
    clear.innerHTML = "Clear";
    clear.addEventListener("click",function(event){
      console.log(event.target.id);
      var x = document.querySelectorAll(".pixel");
      var i;
      console.log("clear",isNormal);
      for(i = 0; i< x.length; i++) {
        if (isNormal === true){
         x[i].style.background = "white";
        } else {
         x[i].style.background = "dimgray";
        }
      }
    });

    container.appendChild(clear);
  }


  function liteBriteMode(){
    var litebrite = document.createElement("button");

    litebrite.id = "litebrite";
    litebrite.innerHTML = "Lite•Brite";

    function mode(){
      isNormal = false;
      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
        x[i].style.backgroundColor = "dimgray";
         x[i].style.borderRadius = "50%";
      }

      // x.style.border-radius = 50%;
      var t = document.getElementById("title");
      t.style.textShadow = "1px 1px 2px black, 0px 0px 25px goldenrod, 0px 0px 15px goldenrod";
      t.innerHTML = "Lite•Brite";

      document.body.style.background = "black";
       console.log("isNormal",isNormal);
       return isNormal;
    }

    litebrite.addEventListener("click",mode);

    container.appendChild(litebrite);

    function normalMode(){
      isNormal = true;
      var x = document.querySelectorAll(".pixel");
      var i;
      for(i = 0; i< x.length; i++) {
        x[i].style.backgroundColor = "white";
         x[i].style.borderRadius = "0%";
      }

      // x.style.border-radius = 50%;
      var g = document.getElementById("title");
      g.style.textShadow = "";
      g.innerHTML = "Pixel Painter";

      document.body.style.background = "lightgray";
      return isNormal;
    }

    var normal = document.createElement("button");
      normal.id = "Normal";
      normal.innerHTML = "Normal";
      normal.addEventListener("click",normalMode);
    container.appendChild(normal);
    console.log("IN",isNormal);
  }


  return {
    buttonContainer: buttonContainer,
    eraseButton: eraseButton,
    clearButton: clearButton,
    liteBriteMode: liteBriteMode
  };

})();




