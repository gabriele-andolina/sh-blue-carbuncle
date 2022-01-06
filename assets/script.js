/* Button variables*/
let mainButton = document.getElementById("main-button");

/* Story parts' variables with their initial hidden status*/
let instructions = document.getElementById("instructions");
instructions.hidden = true;

/* Button functions, show the next portion of the story*/
mainButton.onclick = function() {
    instructions.hidden = false;
    mainButton.hidden = true;
    instructions.scrollIntoView({behavior: "smooth"});
};