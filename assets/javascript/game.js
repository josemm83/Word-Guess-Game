var wordIndex = ["skywalkers", "luke", "han", "leia", "yoda", "kenobi", "vader", "palpatine", 
     "lando", "chewbacca"]; //10
var countdown = 15;
//return a random index number for wordIndex
var index = Math.floor(Math.random() * wordIndex.length);
var guess = wordIndex[index];
// console.log(index);
// console.log(guess);
// console.log(guess.length);

document.onkeyup = function(event){
    var letter = event.key.toLowerCase();
    for(var i = 0; i < countdown; i++){
        for (var h = 0; h < guess.length; h++){
            if (letter === guess.charAt(h)){
                // console.log("good");
            }
        }
    }
};