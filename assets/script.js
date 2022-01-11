// 1) Buttons variables 
const mainButton = document.getElementById("main-button");
const gameAfootButton = document.getElementById("game-afoot-button");
const nextButtonOne = document.getElementById("next-button-one");
const nextButtonTwo = document.getElementById("next-button-two");
const checkAnswersButton = document.getElementById("submit");
const answers = document.getElementsByClassName("answers");
const answerKeys = ["h", "f", "a", "b", "g", "j", "e", "i", "d", "c"];
const selectedDed = [];
const alternateButtonFour = document.getElementById("next-button-four-alternate");
const nextButtonFour = document.getElementById("next-button-four");
const nextButtonFive = document.getElementById("next-button-five");
const nextButtonSix = document.getElementById("next-button-six");
const nextButtonSeven = document.getElementById("next-button-seven");
const nextButtonEight = document.getElementById("next-button-eight");
const nextButtonNine = document.getElementById("next-button-nine");
const nextButtonTen = document.getElementById("next-button-ten");
const nextButtonEleven = document.getElementById("next-button-eleven");
const nextButtonTwelve = document.getElementById("next-button-twelve");
const playAgain = document.getElementById("play-again");
const instructions = document.getElementById("instructions");
const partOne = document.getElementById("part-one");
const partTwo = document.getElementById("part-two");
const observationDeductionGame = document.getElementById("observation-deduction-game");
const quizSolution = document.getElementById("quiz-solution");
const partFour = document.getElementById("part-four");
const partFive = document.getElementById("part-five");
const partSix = document.getElementById("part-six");
const partSeven = document.getElementById("part-seven");
const partEight = document.getElementById("part-eight");
const partNine = document.getElementById("part-nine");
const partTen = document.getElementById("alpha-inn-inside");
const bartenderReply = document.getElementById("bartender-reply");
const bartenderReplyText = document.getElementById("bartender-reply-text");
const choiceOne = document.getElementById("choice-one");
const choiceOneText = document.getElementById("choice-one-text");
const choiceTwo = document.getElementById("choice-two");
const choiceTwoText = document.getElementById("choice-two-text");
const partEleven = document.getElementById("part-eleven");
const partTwelve = document.getElementById("part-twelve");
const congrats = document.getElementById("congrats-message");

//2) Story parts variables with initial hidden status
instructions.hidden = true;
partOne.hidden = true;
partTwo.hidden = true;
observationDeductionGame.hidden = true;
quizSolution.hidden = true;
partFour.hidden = true;
partFive.hidden = true;
partSix.hidden = true;
partSeven.hidden = true;
partEight.hidden = true;
partNine.hidden = true;
partTen.hidden = true;
bartenderReply.hidden = true;
partEleven.hidden = true;
partTwelve.hidden = true;
congrats.hidden = true;

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

alternateButtonFour.onclick = function() {
    partFour.hidden = false;
    alternateButtonFour.hidden = true;
    partFour.scrollIntoView({behavior: "smooth"});
}

nextButtonFour.onclick = function() {
    quizSolution.hidden = true;
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

nextButtonEleven.onclick = function() {
    partTwelve.hidden = false;
    nextButtonEleven.hidden = true;
    partTwelve.scrollIntoView({behavior: "smooth"});
}

nextButtonTwelve.onclick = function() {
    congrats.hidden = false;
    nextButtonTwelve.hidden = true;
    congrats.scrollIntoView({behavior: "smooth"});
}

playAgain.onclick = function() {
    document.location.reload(true);
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
    
    for (let i = 0; i < selectedDed.length; i++) {
        for (let j = 0; j < answerKeys.length; j++) {
            if (selectedDed[i] === answerKeys[i]) {
                checkAnswersButton.innerHTML = "Well done, Dr Watson! Let us move on.";
                moveOn();
            } 
            else {
                checkAnswersButton.innerHTML = "Hmm... not quite, Watson. Let me show you.";
                checkAnswersButton.addEventListener("click", function() {
                    quizSolution.hidden = false;
                    checkAnswersButton.hidden = true;
                    quizSolution.scrollIntoView({behavior: "smooth"});
                });
            }
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