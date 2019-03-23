window.onload = function () {

// declare global variables
// heroes to choose from
var heroes = [
    "ironman", "spiderman", "hulk", "thor", "captainamerica", "blackwidow", "hawkeye","starlord","captainmarvel","daredevil","deadpool","wolverine","doctorstrange","blackpanther","namor", "wasp","groot", "falcon", "spectrum", "warmachine", "antman", "starlord"
];
// random word to guess
var hero;
// user input
var guess;
// stored guesses (go in #already-guessed)
var guesses = [];
// wrong guesses left
var lives;
// counting correct guesses
var counter = 0;

// setting counters for beginning
var wins= 0;
var losses = 0;
var lives = 10;


reset = function () {
    console.log ("reset game");
    lives = 10;
    guesses = [];
    // reset the word
    correct.parentNode.removeChild(correct);
    console.log ("reset the correct array");
    // don't make double letters when play again
    letters.parentNode.removeChild(letters);
    console.log ("reset alphabet buttons so no doubles");
    play ();
    console.log ("start play");
};

// Getting Elements
// var myLives = document.getElementById("guesses-left");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var livesText= document.getElementById("lives-left");

// make alphabet buttons to go in #buttons
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var buttons = function () {
    myButtons = document.getElementById('buttons');
    // make the buttons a list, with each button as a list item
    letters = document.createElement ('ul');
    // console.log ("function is running");

    for (var i = 0; i < alphabet.length; i++) {
        // make these classes instead
    letters.classList.add ('alphabet');
    list = document.createElement ('li');
    list.classList.add ('letter');
    list.innerHTML = alphabet[i];
    // run the check function
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
    }
// console.log ("buttons made"); 
}


// // pick a hero at random
// moved inside play function
// var hero = heroes[Math.floor(Math.random() * heroes.length)];
// console.log ("Random hero: " + hero);
// console.log("length of name: " + hero.length);

// display name as ___ 
var forGuessing = function () {
    guessHere = document.getElementById ('word-to-guess');
    correct = document.createElement('ul');
    for (var i = 0; i < hero.length; i++) {
        correct.id = 'hero-name';
        guess = document.createElement('li');
        guess.setAttribute ('class', 'guess');
        guess.innerHTML = '_';
        // console.log ("guess loop running")
    // add each guess to the array
    guesses.push(guess);
    guessHere.appendChild(correct);
    // console.log ("guessHere: " + this.guessHere);
    correct.appendChild(guess);
    // console.log("should be blanks : " + correct);
    }
}

// possible alerts here

gamerAlerts = function () {
    livesText.innerHTML = "You have " + lives + " lives";
    // if lives reaches 0, alert you lost
    if (lives < 1) {
        livesText.innerHTML = "Game Over";
        alert("You Lost :(");
        console.log ("Game Lost");
        losses += 1;
        lossesText.textContent = "Losses: " + losses;
        console.log("Losses : "+ losses);
        reset ();
    }
    // console.log(`guess length ${guesses.length}`);
    // console.log(`counter`, counter);
    // for (var i = 0; i < guesses.length; i++) {
        if (counter === guesses.length) {
           livesText.innerHTML = "You Win!";
           alert ("You Won!");
            wins += 1;
            winsText.textContent= "Wins: " + wins;
            console.log ("Game Won");
            console.log ("Wins: " + wins);
            reset ();
        }
    // }
}

// reset after win/loss
// reset = function () {
//     console.log ("reset game");
//     lives = 10;
//     // reset the word
//     correct.parentNode.removeChild(correct);
//     console.log ("reset the correct array");
//     // don't make double letters when play again
//     letters.parentNode.removeChild(letters);
//     console.log ("reset alphabet buttons so no doubles");
//     play ();
//     console.log ("start play");
// }



// giant if statement for buttons clicked, including decrementing lives for each wrong button clicked
check = function () {
        // what to do when button clicked
    list.onclick = function () {
        var guess = (this.innerHTML);
        // clicked buttons fade
        // not working- active class is being overridden
        this.setAttribute("class", "thisclicked");
        this.onclick = null;
        for (var i = 0; i < hero.length; i++){
          // if the letter is part of the word  
          if(hero[i] === guess) {
              guesses[i].innerHTML = guess;
              counter += 1;
              console.log ("Counter: " + counter);
          }
        }
        // change lives here 
        var j = (hero.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            console.log ("lives: "+ lives);
            // run the alerts- gamer alerts changes wins/losses too
            gamerAlerts ();
        }
        else {
            gamerAlerts ();
        }
        
    }
}


// if lives reaches zero, alert loss

// increment variables for each win/loss, and alert messages for win/loss

// reset the game, including resetting the number of lives


// actually call all the functions
play = function () {
    // pick a hero at random
    hero = heroes[Math.floor(Math.random() * heroes.length)];
    console.log ("Random hero: " + hero);
    console.log("length of name: " + hero.length);
    
    buttons();
    forGuessing ();
    // check ();   --> runs in buttons
    gamerAlerts();
    lives = 10;
    counter = 0;

}


play ();

// issues on reset- letters not displaying properly/guesses not going in properly


// console.log ("console working");
}
// end of js