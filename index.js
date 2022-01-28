import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const getWord = () => {  
    const word = wordBank[Math.floor(Math.random()* wordBank.length)]; 
    return word;
};

const rounds = 6; 
let wrongCount = 0;
let count = 0;
const word = getWord();
const getLetterFromUser = () => {
    return prompt.keyIn('Please guess a letter: ', {limit:
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});
};
console.log("Press ctrl + c to stop play.");

const answerArray = [];

const correctAnswers = [];

const buildAnswerArray = (word, userGuess) => { 
    for (let i = 0; i < word.length; i++) {
        if(correctAnswers.includes(word[i])) {
        answerArray[word.indexOf(correctAnswers[i])] = correctAnswers[i];
        } else {
        answerArray[i] = "_";
        };
    };
    return answerArray.join("");
};

const getDisplayGraphic = () => { 
    let displayGraphic = "";
    for(let i = 0; i < wrongCount; i++) {
        if (i === 0) {
            displayGraphic += "  __[[ ]]__\n";
        } else if (i === 1) {
            displayGraphic += "   ( *^* )\n";
        } else if (i === 2) {
            displayGraphic += " >(   *   )<\n";
        } else if (i === 3) {
            displayGraphic += " (    *    )\n"; 
        } else if (i === 4) {
            displayGraphic += "(     *     )\n";
        } else {
            displayGraphic += "~~~~~~~~~~~~~~\n";
   };
};
   return displayGraphic;
};

console.log("word", word); //Am leaving this in for now to help player
const checkUserAnswer = (userGuess) => {
    if (word.includes(userGuess)) {
        correctAnswers.push(userGuess);
        const buildAnswer = buildAnswerArray(word, userGuess);
        console.log(answerArray);
    } else { 
        wrongCount++;
        const hangmanDisplay = getDisplayGraphic();
        console.log(hangmanDisplay);
    };
};

const startRound = () => {
    const buildAnswer = buildAnswerArray(word);
    while (count < rounds) {
        console.log("word", answerArray);
        count++;
        const userGuess = getLetterFromUser(word);
        checkUserAnswer(userGuess);
        if (count === 6) {
            const userResponse = prompt.question("Would you like to play again? Y for Yes, N for No");
            if (userResponse.toUpperCase() === "Y") {
                startRound();
            }; 
        };
    };
};

startRound();
