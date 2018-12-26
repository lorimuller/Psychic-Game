
var wins = 1;
var losses = 1;
var guessesRemaining = 10;
var guessedLetters = [];

// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

// add a listener for the user to press a key and change all to lowercase
document.onkeyup = function(event) {
  var userChoice = event.key.toLowerCase();

  // make sure the user selects a value a-z
  var regexp = /[0-9-_ ]/;
  if (regexp.test(userChoice)) {
          alert("please enter a letter");
        }
        else {
          console.log(userChoice);
        }

    // reset computer choice if the user loses
    if (guessesRemaining <= 0) {
    
      document.getElementById("losses").innerHTML = losses++;
      console.log("You lost!");
      alert("You lost!");
      guessesRemaining = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessesRemaining").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
    }
    // compares the randomly selected computer choice and user choice
    if (computerChoice === userChoice) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("wins").innerHTML = wins++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      guessesRemaining = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      console.log("Guess again!");
      document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
      guessedLetters.push(userChoice);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}