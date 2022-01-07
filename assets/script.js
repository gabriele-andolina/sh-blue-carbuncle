/* Button variables*/
let mainButton = document.getElementById("main-button");
let gameAfootButton = document.getElementById("game-afoot-button");
let nextButtonOne = document.getElementById("next-button-one");
let nextButtonTwo = document.getElementById("next-button-two");
let checkAnswersButton = document.getElementById("submit");

/* Story parts' variables with their initial hidden status*/
let instructions = document.getElementById("instructions");
instructions.hidden = true;

let partOne = document.getElementById("part-one");
partOne.hidden = true;

let partTwo = document.getElementById("part-two");
partTwo.hidden = true;

let observationDeductionGame = document.getElementById("observation-deduction-game");
observationDeductionGame.hidden = true;

/* Button functions, show the next portion of the story
Inspired from Codecademy's "Piano Keys" project
*/
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

nextButtonOne.onclick = function() {
    partTwo.hidden = false;
    nextButtonOne.hidden = true;
    partTwo.scrollIntoView({behavior: "smooth"});
};

nextButtonTwo.onclick = function() {
    observationDeductionGame.hidden = false;
    nextButtonTwo.hidden = true;
    observationDeductionGame.scrollIntoView({behavior: "smooth"});
};

/* First JavaScript game: observation-deduction pairing game
Variables that store 1) the HTML Select element for each deduction and 2) the option selected by the user
Inspiration on how to use the "selectedIndex" property was taken from:
https://ricardometring.com/getting-the-value-of-a-select-in-javascript
*/
let dedOne = document.getElementById("deduction-one");
let dedTwo = document.getElementById("deduction-two");
let dedThree = document.getElementById("deduction-three");
let dedFour = document.getElementById("deduction-four");
let dedFive = document.getElementById("deduction-five");
let dedSix = document.getElementById("deduction-six");
let dedSeven = document.getElementById("deduction-seven");
let dedEight = document.getElementById("deduction-eight");
let dedNine = document.getElementById("deduction-nine");
let dedTen = document.getElementById("deduction-ten");

let selectedDedOne = dedOne.options[dedOne.selectedIndex].value;
let selectedDedTwo = dedTwo.options[dedTwo.selectedIndex].value;
let selectedDedThree = dedThree.options[dedThree.selectedIndex].value;
let selectedDedFour = dedFour.options[dedFour.selectedIndex].value;
let selectedDedFive = dedFive.options[dedFive.selectedIndex].value;
let selectedDedSix = dedSix.options[dedSix.selectedIndex].value;
let selectedDedSeven = dedSeven.options[dedSeven.selectedIndex].value;
let selectedDedEight = dedEight.options[dedEight.selectedIndex].value;
let selectedDedNine = dedNine.options[dedNine.selectedIndex].value;
let selectedDedTen = dedTen.options[dedTen.selectedIndex].value;

/* First JavaScript game's function: it fires when the user clicks on checkAnswersButton and checks if the user has chosen
the right deduction for each observation. If so, it changes the innerHTML of the same button to let 
the user move on with the story, otherwise it tells the user to check their answers again.
*/
checkAnswersButton.addEventListener("click", function() {
    if ((selectedDedOne != "h") || (selectedDedTwo != "f") ||
    (selectedDedThree != "a") || (selectedDedFour != "b") ||
    (selectedDedFive != "g") || (selectedDedSix != "j") ||
    (selectedDedSeven != "e") || (selectedDedEight != "i") ||
    (selectedDedNine != "d") || (selectedDedTen != "c")) {
        checkAnswersButton.innerHTML = "Hmm... not quite, Dr Watson. Try again."
    } else if ((selectedDedOne === "h") && (selectedDedTwo === "f") &&
    (selectedDedThree === "a") && (selectedDedFour === "b") &&
    (selectedDedFive === "g") && (selectedDedSix === "j") &&
    (selectedDedSeven === "e") && (selectedDedEight === "i") &&
    (selectedDedNine === "d") && (selectedDedTen === "c")) {
        checkAnswersButton.innerHTML = "Well done, Dr Watson! Let us move on."
    }
});