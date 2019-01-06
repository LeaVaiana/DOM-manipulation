var button = document.querySelector("button");
var isPurple = false; //per cambiare tra due colori 

/* button.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = "white";
        isPurple = false;
    } else {
        document.body.style.background = "purple";
        isPurple = true;
    }
});
*/

button.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    } isPurple = !isPurple; //DYR code!
});


