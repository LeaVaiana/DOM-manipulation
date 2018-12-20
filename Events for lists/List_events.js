/* CAMBIAMO LO STILE SUL PRIMO ELEMENTO DELLA LISTA
var firstLi = document.querySelector("li"); //seleziono il primo elemento della lista

firstLi.addEventListener("mouseover", function(){
    firstLi.style.color="green"; //cambio colore se il mouseover
});

firstLi.addEventListener("mouseout", function(){
    firstLi.style.color="black"; //ritorno al colore di default se il mouseover
});
*/

//APPLICHIAMO LO STILE PRECEDENTE A TUTTI GLI ELEMENTI DELLA LISTA
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i ++){
    lis[i].addEventListener("mouseover", function(){
        this.style.color="green";
    });
    lis[i].addEventListener("mouseout", function(){
        this.style.color="black";
    });
    //aggiungo lo stile (nel css) per un elemento da eliminare
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}



