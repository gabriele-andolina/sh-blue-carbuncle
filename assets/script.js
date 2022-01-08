/* 
1) Buttons variables 
2) Story parts variables with initial hidden status*/
let mainButton = document.getElementById("main-button");
let gameAfootButton = document.getElementById("game-afoot-button");
let nextButtonOne = document.getElementById("next-button-one");
let nextButtonTwo = document.getElementById("next-button-two");
let checkAnswersButton = document.getElementById("submit");
let answers = document.getElementsByClassName("answers");
let answerKeys = ["h", "f", "a", "b", "g", "j", "e", "i", "d", "c"];
let selectedDed = [];
let nextButtonFour = document.getElementById("next-button-four");

let instructions = document.getElementById("instructions");
instructions.hidden = true;
let partOne = document.getElementById("part-one");
partOne.hidden = true;
let partTwo = document.getElementById("part-two");
partTwo.hidden = true;
let observationDeductionGame = document.getElementById("observation-deduction-game");
observationDeductionGame.hidden = true;
let partFour = document.getElementById("part-four");
partFour.hidden = true;
let partFive = document.getElementById("part-five");
partFive.hidden = true;

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

nextButtonFour.onclick = function() {
    partFive.hidden = false;
    nextButtonFour.hidden = true;
    partFive.scrollIntoView({behavior: "smooth"});
}



/* First JavaScript game functions */
let moveOn = () => {
    if (checkAnswersButton.innerHTML === "Well done, Dr Watson! Let us move on.") {
        checkAnswersButton.addEventListener("click", function() {
            partFour.hidden = false;
            checkAnswersButton.hidden = true;
            partFour.scrollIntoView({behavior: "smooth"});
            })
    }
};

let checkAnswers = () => {
    for (let i = 0; i < answers.length; i++) {
        selectedDed.push(answers[i].options[answers[i].selectedIndex].value);
    }
//remove != and restore === + else statement
    for (let i = 0; i < selectedDed.length; i++) {
        for (let j = 0; j < answerKeys.length; j++) {
            if (selectedDed[i] != answerKeys[i]) {
                checkAnswersButton.innerHTML = "Well done, Dr Watson! Let us move on.";
                moveOn();
            } 
            // else {
            //     checkAnswersButton.innerHTML = "Hmm... not quite Dr Watson. Check your answers and try again.";
            // }
        }
    }
};
checkAnswersButton.addEventListener("click", checkAnswers);