import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const getWord = () => {  
    const word = wordBank[Math.floor(Math.random()* wordBank.length)]; 
    return word;
};
const maxGuess = 6;/*Do I need to set up a function for maxGuess or ref. in while loop?*/
const count = 0;
const countRounds = 0;
const letterArray = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (.join(' '));
}; /*Need to fix syntax error & understand what exactly is going on w/this .join is doing/working?. 
Is 'letter' correct here or use input? or ?*/
/*const getRandomWord = () => {
    return word;
}; --DO I need this? /* or aWord instead of word?*/

const buildAnswerArray = (word) => {
    const answerArray = []; /*This is making the word letters underscore. Does this need to be in a function, form?*/
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};
const remainingLetters = word.length;

const guessStatus = (answerArray) => {  /*Need this? Or this is */
    return answerArray.join(" ");
};

const getGuess = () => {   /*Need this? Or this is same as const guess below?*/
    if (remainingLetters > 0) {
        console.log("Please guess 1 letter");
        };
};

const gameStatus = (guess, word, answerArray) => {
    const/* this is same as const guess below?
    need to fill in function to update answerArray & return a number showing
    # of x letter guess appears in the word so remainingLetters will update*/
};

const roundStatus = (numOfRounds) => { /*Need a for, of or in loop here? Going for Games Won X of total played*/
    const game = roundStatus();
    if (gameStatus === true) {
    } else if (games)
    console.log("Games won" + );
    } else {
        console.log("Press ctrl + c to stop play.");
    };

};

const guess = () => {
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        console.log("Please enter only a single letter");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
        count++; {            
        }
        if (count > 6) {
            return ("Game Over. The word was " + word);
        }
    };

const displayGraphic = (guess) => {  /* shld ref back to guess, or make new, guessWrong?--need 2nd param,graphic?*/
    /* Need a for in loop here?  Seems actually be working (Only thing :)...)*/
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

while (remainingLetters > 0) {
    guessStatus(answerArray);
    const guess = getGuess();    
    if (guess === null) {
        displayGraphic();
        break;
    } else if (guess.length !==1) { /* why is there issue w/guess not ref. a value & ... under the .length?*/
        console.log("Please enter 1 letter only");
    } else {
        let correctGuesses = gameStatus(guess, word, answerArray);
        remainingLetters -= correctGuesses;
        console.log("You won this round!");
    }
   
};

console.log('Letter ' + letter); /*need or chg ref? */{
count++;
};
if (count > 6) {  /* does this nee to go somewhere else?*/
    console.log("Round Over. The word was " + word);
};

    /*why do I have this red syntax error at end?*/
