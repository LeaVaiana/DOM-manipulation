//addEventListener

//sintax: element.addEventListener(type, functionToCall);
//the callback function will be executed after the click event

var button = document.querySelector("button");

button.addEventListener("click", function(){
    console.log("Someone clicked the button");
});

//DIPLAY A MESSAGE WHEN A BUTTON IS CLICKED
//put the value of button and paragraph in a var
var button = document.querySelector("button");
var paragraph = document.querySelector("p");
//setup click listener
button.addEventListener("click", function(){
    paragraph.textContent = "Someone clicked the button"
});

//Change h1 <div class="dropdown open">
var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    alert("h1 was clicked");
})

//new color for elements of a list
var list = document.querySelectorAll("li");

for(var i = 0; i <list.length; i++){
    list[i].addEventListener("click", function(){
        this.style.color = "purple";
    });
}


