window.onload = function () {

// declare global variables
// heroes to choose from || array of 7
var heroes = [
    "ironman", 
    "spiderman",
    "hulk", 
    "thor", 
    "captainamerica", 
    "blackwidow", 
    "hawkeye"
];
// random word to guess
var targetWord;
// user input
var guess;
// stored guesses (go in #already-guessed)
var guesses = [];
// wrong guesses left
var lives;
// counting correct guesses
var counter;

// setting counters for beginning
var wins= 0;
var losses = 0;
var lives = 10;

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
    letters.id = 'alphabet';
    list = document.createElement ('li');
    list.id = 'letter';
    list.innerHTML = alphabet[i];
    // run the check function
    check();
    myButtons.appendChild(letters);
    letters.appendChild(list);
    }
// console.log ("buttons made"); 
}

// pick a hero at random
var hero = heroes[Math.floor(Math.random() * heroes.length)];
console.log ("Random hero: " + hero);
console.log("length of name: " + hero.length);

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
        console.log ("Game Lost");
        losses += 1;
        lossesText.textContent = "losses: " + losses;
        console.log("losses : "+ losses);
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter === guesses.length) {
           livesText.innerHTML = "You Win!";
            wins += 1;
            winsText.textContent= "wins: " + wins;
            console.log ("Game Won");
            console.log ("wins: " + wins);
        }
    }
}



// giant if statement for buttons clicked, including decrementing lives for each wrong button clicked
check = function () {
        // what to do when button clicked
    list.onclick = function () {
        var guess = (this.innerHTML);
        // clicked buttons fade
        // not working- active class is being overridden
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < hero.length; i++){
          // if the letter is part of the word  
          if(hero[i] === guess) {
              guesses[i].innerHTML = guess;
              counter += 1;
              console.log ("Counter: " + counter);
            //   this part isn't working properly
          }
        //   doesn't work else {
        //     //   reduce the number of lives
        //       --lives;
        //       console.log ("lives: " + lives); 
        //   }
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
    buttons();
    forGuessing ();
    // check ();   --> runs in buttons
    gamerAlerts();

}


play ();

// things not working- no alerts of gamw won
// game over working
// how to reset


console.log ("console working");
}
// end of js