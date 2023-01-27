var button = document.getElementById("enter");
var input  = document.getElementById("userinput");
var ul = document.querySelector("ul");
var text = document.getElementById("capslock");


function inputLength() {
    return input.value.length; 
}



function createLi() {
    var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            input.value = ""; 
};


function addListAfterClick() {
        if(inputLength() > 0) {
            createLi();
        }
}

function addListAfterKeypress(event) {
        if(inputLength() > 0 && event.keyCode === 13) {
            createLi();
    }
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);