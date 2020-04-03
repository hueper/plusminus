(function(){
document.addEventListener("mousemove", changeColor);

  function changeColor(event) {
    let red, green, blue, backgroundColor;
    let mouseY, clientHeight, heightPercentage;

    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");

    heightPercentage = (document.body.clientHeight)/255;
    mousePositionY = event.pageY;
    clientHeight = document.body.clientHeight;

    blue = parseInt(mousePositionY / heightPercentage, 10);
    red = 255-blue;

    // wenn in Bereich: obere Hälfte der Webseite
    if(mousePositionY <= clientHeight/2){
      green = (255-red)*2;
    } else {  // alle anderen Fälle
      green = red*2;
    }


    /*
     * change background color
     */
    backgroundColor = "rgba("+red+", "+green+", "+blue+")";
    document.body.style.background = backgroundColor;

    /*
     * change font color
     */
    fontColor = "rgba("+blue+", "+"0"+", "+red+")";
    plus.style.color = fontColor;
    minus.style.color = fontColor;
  }
})(); // iife
