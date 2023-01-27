var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var gradient = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var hexCode;


function currentColorText () {
     hexCode = "linear-gradient ( to right ," + color1.value + ", " + color2.value +" )";

    h3.innerHTML = hexCode;
        h3.select();
        document.execCommand("copy");

  

}


function currentColor() {
    gradient.style.background = "linear-gradient(to right,"+ color1.value +", "+color2.value + ")";

}

function allValue() {
    currentColor();
    currentColorText ();
}

color1.addEventListener("input",allValue);

color2.addEventListener("input",allValue);


// linear-gradient(direction, color-stop1, color-stop2, ...)

