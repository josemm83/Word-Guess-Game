var wordIndex = ["the skywalkers", "luke skywalker", "han solo", "leia organa", "master yoda", "obi wan kenobi", "darth vader", "darth sidious", 
     "lando calrissian", "chewbacca"]; //10
var countdown = 15;
var numRight = 0;
var phrase = [];
var guessedLtrs = [];
var wins = 0;

//return a random index number for wordIndex
var guess = wordIndex[Math.floor(Math.random() * wordIndex.length)]; //selects guessed word of the index
// console.log(index);
//  console.log(guess);
// console.log(guess.length);
var exactLength = guess.length;
//will add up exact number of letters needed to solve mystery word 
function exactLth(){
    for (var j = 0; j < guess.length; j++){
        if(guess.charAt(j) === " "){
            exactLength --;
            phrase[j] = " ";
        }
        else{
            phrase[j] = " _ ";
        }
    }
}

function gameStart(ltr){
    for(var i = 0; i < guess.length; i++){
        if(ltr === guess.charAt(i)){
            phrase[i] = ltr;
            numRight ++;
            document.querySelector("#result").innerHTML = phrase.join(" ");
        }
    }
    guessedLtrs.push(ltr);
}

function printout(){
    document.querySelector("#result").innerHTML = phrase.join(" ");
    document.querySelector("#wins").innerHTML = "Number of wins: " + wins;
    document.querySelector("#guess").innerHTML = "Guessed Letters: " + guessedLtrs;
    document.querySelector("#remaining").innerHTML = "Number of guesses remaining: " + countdown;
}

function gameRestart(){
    guess = wordIndex[Math.floor(Math.random() * wordIndex.length)];
    // console.log(guess);
    numRight = 0;
    countdown = 15;
    guessedLtrs.length = 0;
    exactLength = guess.length;
    phrase.length = 0;
    exactLth();
    gameStart(event);
}
//activates when user presses a key
document.onkeyup = function(event){
    if(numRight === exactLength){
        document.querySelector("#update").innerHTML = "Congratulations You Have Solved The Puzzle";
        wins ++;
        printout();
        gameRestart();
    }
    else if (countdown === 15){
        exactLth();
        printout();
    }
    else if(countdown === 0){
        document.querySelector("#update").innerHTML = "Better Luck Next Time Kiddo...";
        printout();
        gameRestart();
    }

    var letter = event.key.toLowerCase();
    gameStart(letter);
    countdown --;
    printout();
};