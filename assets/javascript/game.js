var wordIndex = ["the skywalkers", "luke skywalker", "han solo", "leia organa", "yoda", "obi wan kenobi", "darth vader", "darth sidious", 
     "lando calrissian", "chewbacca"]; //10
var countdown = 15;
var numRight = 0;
var phrase = [];
var guessedLtrs = [];
var ltr = /^[a-zA-z]+$/;
//return a random index number for wordIndex
var guess = wordIndex[Math.floor(Math.random() * wordIndex.length)]; //selects guessed word of the index
// console.log(index);
 console.log(guess);
// console.log(guess.length);

//will add 
for (var j = 0; j < guess.length; j++){
    phrase[j] = " _ ";
}

function gameStart(ltr){
    if(ltr === guess.charAt(i)){
        phrase[i] = ltr;
        numRight ++;
        }
    document.querySelector("#result").innerHTML = phrase;
}
//activates when user presses a key
document.onkeyup = function(event){
    if(numRight === guess.length){
        document.querySelector("#update").innerHTML = "Congratulations You Have Solved The Puzzle";
        return;
    }
    else if(countdown = 0){
        document.querySelector("#update").innerHTML = "Better Luck Next Time Kiddo...";
        return;
    }
    var letter = event.key.toLowerCase();
    gameStart(letter);
    countdown --;
};