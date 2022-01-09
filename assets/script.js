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
let bartenderReply = document.getElementById("bartender-reply");
bartenderReply.hidden = true;
let bartenderReplyText = document.getElementById("bartender-reply-text");
let choiceOne = document.getElementById("choice-one");
let choiceOneText = document.getElementById("choice-one-text");
let choiceTwo = document.getElementById("choice-two");
let choiceTwoText = document.getElementById("choice-two-text");
let partEleven = document.getElementById("part-eleven");
partEleven.hidden = true;

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

// Second JavaScript interaction: questioning the pub owner
//Losing choice
//1.1
choiceOne.addEventListener("click", function() {
    bartenderReply.hidden = false;
    bartenderReplyText.innerHTML = "Evenin', sir. Need any help?"
    choiceOneText.innerHTML = "Just some quick information. Where did you buy those geese you sold for Christmas?"
    choiceTwoText.innerHTML = "Yes, I'm here on an investigation. Tell me where you bought those geese you sold for Christmas."
    //1.1.1
    choiceOne.addEventListener("click", function() {
        bartenderReplyText.innerHTML = "Geese... what geese? How about a pint instead?"
        choiceOneText.innerHTML = "I'm serious. Where did you buy those geese?"
        choiceTwoText.innerHTML = "I'm not joking! I need to know that information now!"
        //1.1.1.1.
        choiceOne.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "I'm serious too. Buy a drink or get out!"
            choiceOne.hidden = true;
            choiceTwoText.innerHTML = "Dear Watson, I have been too hasty and failed to get that information. We won't be able to solve this case...";

            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Play again. Click here to refresh the page.";
            nextButtonTen.addEventListener("click", function() {
            document.location.reload(true)
    })
        });
        //1.1.1.2
        choiceTwo.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "I'm not joking either. Buy a drink or get out!"
            choiceOne.hidden = true;
            choiceTwo.style.width = "90%";
            choiceTwoText.innerHTML = "Dear Watson, I have been too hasty and failed to get that information. We won't be able to solve this case...";
            
            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Play again. Click here to refresh the page.";
            nextButtonTen.addEventListener("click", function() {
            document.location.reload(true)
    })
        })
    })
    //1.2.1
    choiceTwo.addEventListener("click", function() {
        bartenderReplyText.innerHTML = "Can't I buy me pub's food where I like?"
        choiceOneText.innerHTML = "This is important. Where did you buy those geese?"
        choiceTwoText.innerHTML = "Should I call the police?? I need to know that information now!"
        //1.2.1.1.
        choiceOne.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "I can buy my food where I like and won't tell you! Now out of my pub!"
            choiceOne.hidden = true;
            choiceTwoText.innerHTML = "Dear Watson, I have been too hasty and failed to get that information. We won't be able to solve this case...";

            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Play again. Click here to refresh the page.";
            nextButtonTen.addEventListener("click", function() {
            document.location.reload(true)
    })
        });
        //1.2.1.2
        choiceTwo.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "You can call the Pope if you like. Now buy a drink or get out!"
            choiceOne.hidden = true;
            choiceTwo.style.width = "90%";
            choiceTwoText.innerHTML = "Dear Watson, I have been too hasty and failed to get that information. We won't be able to solve this case...";
            
            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Play again. Click here to refresh the page.";
            nextButtonTen.addEventListener("click", function() {
            document.location.reload(true)
    })
        })
    })

})

// Winning choice
//2.1
choiceTwo.addEventListener("click", function() {
    bartenderReply.hidden = false;
    bartenderReplyText.innerHTML = "You bet! Bloody cold outside, innit?"
    choiceOneText.innerHTML = "Cold indeed! If only one had something to eat to warm up... perhaps some fine goose meat. Right, Watson?"
    choiceTwoText.innerHTML = "Cold indeed! Thankfully, my friend and I warmed our bellies with one of your geese. It was given to us by a friend..."

    //2.1.1
    choiceOne.addEventListener("click", function() {
        bartenderReplyText.innerHTML = "Goose! I have some excellent one I bought at the Covent Garden Market."
        choiceOneText.innerHTML = "Then we shan't fail to try it! Which stall did you buy it from, if I may ask?"
        choiceTwoText.innerHTML = "Being a fowl fancier myself, I buy my meat there too. Which seller does your goose come from?"
        //2.1.1.1.
        choiceOne.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "From Breckinridge's, sir. You should try it."
            choiceOne.hidden = true;
            choiceTwoText.innerHTML = "Dear Watson, we've got what we came here for. Let us eat quickly and go to the stalls.";

            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Well done! Please keep on reading.";
            nextButtonTen.addEventListener("click", function() {
            partEleven.hidden = false;
            partEleven.scrollIntoView({behavior: "smooth"})
    })
        });
        //2.1.1.2
        choiceTwo.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "Breckinridge is his name. Excellent meat!"
            choiceOne.hidden = true;
            choiceTwo.style.width = "90%";
            choiceTwoText.innerHTML = "Dear Watson, now we know where to go. Let us eat quickly and go to the stalls.";
            
            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Well done! Please keep on reading.";
            nextButtonTen.addEventListener("click", function() {
            partEleven.hidden = false;
            partEleven.scrollIntoView({behavior: "smooth"})
    })
        })
    })
    //2.2.1
    choiceTwo.addEventListener("click", function() {
        bartenderReplyText.innerHTML = "Oh, yes. We had a Christmas club with a dozen geese for a prize."
        choiceOneText.innerHTML = "The one our friend gave us was excellent. Where did you buy it?"
        choiceTwoText.innerHTML = "A superb prize it was! Do you happen to remember the seller?"
        //2.2.1.1.
        choiceOne.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "Certainly, sir. Breckinridge is his name. Excellent meat!"
            choiceOne.hidden = true;
            choiceTwoText.innerHTML = "Dear Watson, now we know whom to look for. Let us move!";

            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Well done! Please keep on reading.";
            nextButtonTen.addEventListener("click", function() {
            partEleven.hidden = false;
            partEleven.scrollIntoView({behavior: "smooth"})
    })
        });
        //2.2.1.2
        choiceTwo.addEventListener("click", function() {
            bartenderReplyText.innerHTML = "At Breckinridge's sir, and it was an excellent purchase!"
            choiceOne.hidden = true;
            choiceTwo.style.width = "90%";
            choiceTwoText.innerHTML = "Dear Watson, we're closer to the solution now. Let us go to Breckinridge's.";
            
            nextButtonTen.hidden = false;
            nextButtonTen.innerHTML = "Well done! Please keep on reading.";
            nextButtonTen.addEventListener("click", function() {
            partEleven.hidden = false;
            partEleven.scrollIntoView({behavior: "smooth"})
    })
        })
    })
});    