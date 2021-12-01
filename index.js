import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const getWord = () => {  
    const word = wordBank[Math.floor(Math.random()* wordBank.length)]; 
    return word;
};

const maxGuess = 6;
const errors = 0;
let count = 0;
let userGuess = '@';

/*Do I need a "start, message function HERE?"*/
const isLetter = () => { /*Quokka Error Message "false ​​​​​at ​​​​​​​​isLetter()​​​ ​quokka.js:15:0​/"*/
    const guess = userGuess[0];
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(guess) > -1;
}; 
console.log(isLetter());

const buildAnswerArray = (word) => {
    const answerArray = []; 
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    };
    return answerArray;
};

const guessStatus = (answerArray) => {  
    return answerArray.join(" ");
};

const getGuess = () => {   
    return prompt("Please guess 1 letter: ");   /*OK? or shld I use a console.log("Please guess 1 letter: ?")*/         
};

const gameStatus = (guess, word, answerArray) => {/*Are gameStatus & guess doing similar things-Need both?*/
    let visual = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            visual++;
        }
    } 
    return visual;  
};
/*
const maxGuess = () => {        Took out- Quokka error msg "maxGuess already declared"
    if (errors >= maxGuess) {
      return prompt("Round Over! The answer was" + word);  
    }
};  */

const roundStatus = () => { /*Why is roundStatus 'void'? what do I need to return?*/
    const round = maxGuess();  /*This may not be correct*/
    if (gameStatus === true) {
        console.log("Games won" + gameStatus);
    } else {
        console.log("Press ctrl + c to stop play.");
    };
};
round(); /*This may not be correct*/

const guess = () => { /*Why is guess 'void'?--what do I need to return?*/
    if (guess === null) {
    } else if (guess.length !== 1) {
        console.log("Please enter only a single letter");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            };
        }; 
        count++; {            
        };
        if (count > 6) {
            console.log("Game Over. The word was " + word);
        };
};
const word = getWord;
const answerArray = buildAnswerArray;
const remainingLetters = word.length;
let winCount = 0;
let total = 0;

const displayGraphic = (guess) => {  
   if (guess = 0) {
       return "__[[ ]]__";
   } else if (guess = 1) {
       return "   ( * * )";
   } else if (guess = 2) {
       return ">(    *    )<";
       } else if (guess = 3) {
       return "("; 
   } else if (guess = 4) {
       return "     *      ";
   } else {
       return "             )";
   }
};

const round = () => {
    if (gameStatus >= maxGuess()) {
       /*  Need something here am sure*/
    } 
    let roundDisplay = "New Round!";
    console.log(roundDisplay);
    let word;  /* Have no idea what to 'declare' here, H/E know need to do something with winCount
                 and total to display 'Games Won:' + round + ' of ' + total;*/
}

while (remainingLetters > 0) {
    guessStatus(answerArray);  /* Does this need to go after if/else statements?*/
    const guess = getGuess();   /* Does this need to go after if/else statements?*/ 
    if (guess === null) {
        displayGraphic(guess);
        break;
    } else if (guess !== 1) { 
        console.log("Please enter 1 letter only");        
    } else if (guess === true) {
        getGuess();
    } else {
        let correctGuesses = gameStatus(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        console.log("You won this round!");
    }
    console.log("Round Over. The word was " + word);
    round();
}};
round();