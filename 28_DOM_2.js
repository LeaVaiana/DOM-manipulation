'use strict'

//Ottenere tutti i div
var allDivs = document.getElementsByTagName('div');
console.log(allDivs);//collezione dei div

//ottenere un particolare div
var specificDiv = allDivs[2]
console.log(specificDiv);//mi ritorna il div di indice 2

//per ottenere il testo di un div(elemento)
var elemento = allDivs[2].textContent; //indico div di indice 2
console.log(elemento);//Hi, I am the box number 3

//per cambiare il testo di un elemento e cambiarne il colore
var elemento = allDivs[2]
elemento.innerHTML = "Seleziono l'elemento e ne cambio il testo con innerHTML"
elemento.style.background = "pink"
console.log(elemento)






