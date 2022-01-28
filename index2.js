import prompt from "readline-sync";
import wordBank from "./word-bank.js";

const getWord = () => {  
    const word = wordBank[Math.floor(Math.random()* wordBank.length)]; 
    return word;
};

const rounds = 6; 
let count = 0;
let userGuess = '@';

const getLetterFromUser = () => {
    //console.log("COUNT",count);
    console.log("Press ctrl + c to stop play.");
    return prompt.keyIn('Please guess a letter: ', {limit:
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'});
};

const buildAnswerArray = (word) => { //only 1 underscore for correct guess letter is displaying--was displaying b4
    const answerArray = []; 
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    };
    return answerArray;
};

const guessStatus = (answerArray) => { //Not getting letters display to user w/correct guess
    return answerArray.join(" ");
};

const getGuess = () => {   //Not yet validating user input?
    return prompt.question("Please guess 1 letter: "); //Works, is 2nd question, H/E is redundant (?)
};

const gameStatus = (round, guess, word, answerArray) => {//Added 'round'as a parameter?- NOT Displaying*/
    let visual = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            visual++;
        }
    } 
    return visual;  
};

const maxGuess = () => {        
    if (count >= rounds) {
      console.log("Round Over! The answer was " + word);//Is working
    }
}; 

const roundStatus = () => { 
    //const round = maxGuess();  //'round' is declared, value never read
    count++;
    if (gameStatus === true) {
        console.log("Games won" + gameStatus); //Not getting a count of Games won
        } else {         
        const answer = getLetterFromUser(); 
        const buildAnswer = buildAnswerArray(answer);
        console.log(buildAnswer);
        //getLetterFromUser();
    };
};
 
const guess = () => { //This is where count is? but not woriking?
    if (getGuess === null) { 
    } else if (getGuess.length !== 1) { 
        console.log("Please enter only a single letter"); //not working, redunant to what is working in while loop
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === getGuess) {
                answerArray[j] = getGuess;
                remainingLetters--;
            };
        }; 
        count++;             
    
        if (count > 6) {
            console.log("Round Over! The word was " + word + "."); //--DUPLICATED--not working
        };
    }
};

const word = getWord();
const answerArray = buildAnswerArray(word);
const remainingLetters = word.length;
//let winCount = 0; //Added in Matina session--Need this? If do, am sure need it in my while loop?
//let total = 0; //Added in Matina session--Need this? If do, am sure need it in my while loop?

const getDisplayGraphic = (rounds) => { //Shld be diff. param. name? or not calling it @ ea. wrong entry?
    let displayGraphic = "";
    for(let i = 0; i < rounds; i++) //Graphic Not Displaying
        if (i === 0) {
            displayGraphic += "__[[ ]]__\n";
        } else if (i === 1) {
            displayGraphic += "   ( * * )\n";
        } else if (i === 2) {
            displayGraphic += ">(    *    )<\n";

        } else if (i === 3) {
            displayGraphic += "(\n"; 
        } else if (i === 4) {
            displayGraphic += "      *      \n";
        } else {
            displayGraphic += "             )\n";
   }
   return getDisplayGraphic(); //added return, but not working--tried return 'displayGraphic'--neither work
};

const round = () => { //need to input parameter here for round?
    if (gameStatus >= maxGuess()) {
       /*  Need something here ??????*/
    } 
    //let roundDisplay = "New Round!"; //This is working
    //console.log(roundDisplay);
    let word;  /* Need to do something with 'winCount'
                 and 'total' (?) to display 'Games Won:' + round + ' of ' + total;*/
};

while (remainingLetters > 0) {  
    console.log("REMAININGLETTERS", remainingLetters); 
    roundStatus();
    guessStatus(answerArray);  
    const guess = getGuess();  
    if (guess === null) {
        getDisplayGraphic(); //not working to get graphic to display-tried changing 'null' to 'true' & didn't work
        break;
    } else if (guess !== 1) { 
        console.log("Please enter 1 letter only");//This is working--duplicated in 'guess' function --as is below?   
    } else if (guess === true) {
        getGuess();        
    } else {
        let correctGuesses = gameStatus(round, guess, word, answerArray);
        remainingLetters -= correctGuesses;
        console.log("You won this round!");
    }
    round();
};
guess();
/*round();*/