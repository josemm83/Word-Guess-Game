var wordIndex = ["the skywalkers", "luke skywalker", "han solo", "leia organa", "master yoda", "obi wan kenobi", "darth vader", "darth sidious", 
     "lando calrissian", "chewbacca"]; //10
var countdown = 15;
var numRight = 0;
var phrase = [];
var guessedLtrs = [];
var wins = 0;
// var ltr = /^[a-zA-z]+$/;
//return a random index number for wordIndex
var guess = wordIndex[Math.floor(Math.random() * wordIndex.length)]; //selects guessed word of the index
// console.log(index);
 console.log(guess);
// console.log(guess.length);
var exactLength = guess.length;
//will add 
for (var j = 0; j < guess.length; j++){
    if(guess.charAt(j) === " "){
        exactLength --;
        phrase[j] = " ";
    }
    else{
        phrase[j] = " _ ";
    }
}

function gameStart(ltr){
    for(var i = 0; i < guess.length; i++){
        if(ltr === guess.charAt(i)){
            phrase[i] = ltr;
            numRight ++;
            document.querySelector("#result").innerHTML = phrase.join(" ");
        }
        if (numRight === exactLength){
            printout();
            return;
        }
    }
    guessedLtrs.push(ltr);
}

function printout(){
    document.querySelector("#wins").innerHTML = "Number of wins: " + wins;
    document.querySelector("#guess").innerHTML = "Guessed Letters: " + guessedLtrs.join(" ");
    document.querySelector("#remaining").innerHTML = "Number of guesses remaining: " + countdown;
}
//activates when user presses a key
document.onkeyup = function(event){
    // console.log(numRight);
    // console.log(exactLength);
    if(numRight === exactLength){
        document.querySelector("#update").innerHTML = "Congratulations You Have Solved The Puzzle";
        wins ++;
        printout();
        return;
    }
    else if(countdown === 0){
        document.querySelector("#update").innerHTML = "Better Luck Next Time Kiddo...";
        return;
    }
    var letter = event.key.toLowerCase();
    gameStart(letter);
    countdown --;
    printout();
};