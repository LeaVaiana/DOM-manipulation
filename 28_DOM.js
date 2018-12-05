"use strict"

//DOM: Document Object Model
//to call and modify any element in HTML

//to get elements with a specific ID:
var box = document.getElementById("myBox")
console.log(box); //it return div myBox

//since the element is already selected I can modify it

box.innerHTML = "A new text into the box inserted";
box.style.background = "pink";
box.style.padding = "20 px";
box.style.color = "green";
box.className = "NiceBox"

//I can create a function in order to change color:
function changeColor(color){
    box.style.background = color;
}

changeColor("pink")//posso invocare la funzione per cambiare il colore
console.log(changeColor);

//Query Selector, una alternativa per selezionare
var box = document.querySelector("#myBox"); //name per il nome dell'elemento, #name for ID element, .name for class element

//per selezionare tutti i div del documento:
var allDivs = document.getElementsByTagName("div");
console.log(allDivs)