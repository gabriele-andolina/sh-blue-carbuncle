/* Button variables*/
let mainButton = document.getElementById("main-button");
let gameAfootButton = document.getElementById("game-afoot-button");

/* Story parts' variables with their initial hidden status*/
let instructions = document.getElementById("instructions");
instructions.hidden = true;

let partOne = document.getElementById("part-one");
partOne.hidden = true;

/* Button functions, show the next portion of the story*/
mainButton.onclick = function() {
    instructions.hidden = false;
    mainButton.hidden = true;
    instructions.scrollIntoView({behavior: "smooth"});
};

gameAfootButton.onclick = function() {
    partOne.hidden = false;
    gameAfootButton.hidden = true;
    partOne.scrollIntoView({behavior: "smooth"});
};