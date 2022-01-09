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
let nextButtonFive = document.getElementById("next-button-five");
let nextButtonSix = document.getElementById("next-button-six");
let nextButtonSeven = document.getElementById("next-button-seven");
let nextButtonEight = document.getElementById("next-button-eight");
let nextButtonNine = document.getElementById("next-button-nine");
let nextButtonTen = document.getElementById("next-button-ten");

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
let partSix = document.getElementById("part-six");
partSix.hidden = true;
let partSeven = document.getElementById("part-seven");
partSeven.hidden = true;
let partEight = document.getElementById("part-eight");
partEight.hidden = true;
let partNine = document.getElementById("part-nine");
partNine.hidden = true;
let partTen = document.getElementById("alpha-inn-inside");
partTen.hidden = true;

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

nextButtonFive.onclick = function() {
    partSix.hidden = false;
    nextButtonFive.hidden = true;
    partSix.scrollIntoView({behavior: "smooth"});
}

nextButtonSix.onclick = function() {
    partSeven.hidden = false;
    nextButtonSix.hidden = true;
    partSeven.scrollIntoView({behavior: "smooth"});
}

nextButtonSeven.onclick = function() {
    partEight.hidden = false;
    nextButtonSeven.hidden = true;
    partEight.scrollIntoView({behavior: "smooth"});
}

nextButtonEight.onclick = function() {
    partNine.hidden = false;
    nextButtonEight.hidden = true;
    partNine.scrollIntoView({behavior: "smooth"});
}

nextButtonNine.onclick = function() {
    partTen.hidden = false;
    nextButtonNine.hidden = true;
    partTen.scrollIntoView({behavior: "smooth"});
    nextButtonTen.hidden = true;
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