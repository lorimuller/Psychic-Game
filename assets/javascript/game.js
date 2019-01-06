
var wins = 1;
var losses = 1;
var remainingGuesses = 10;
var letterGuesses = [];

// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// set up the computer to pick a random indexed value from aray
var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);

//function to reset the game
function clearFunction() {
    document.location.reload();
            clearInterval(interval);    
}

// press a key and change all to lowercase
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
    if (remainingGuesses <= 0) {
      console.log("You lost!");
      alert("You lost :(");
      document.getElementById("losses").innerHTML = losses++;
      letterGuesses = [];
      document.getElementById("guessedLetters").innerHTML = letterGuesses; 
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log("new computer choice " + computerChoice);
      remainingGuesses = 10;
      document.getElementById("guessesRemaining").innerHTML = 10; 
    }  

    // compares the users selection to the random computer game
   else if (computerChoice === userChoice) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("wins").innerHTML = wins++;
      letterGuesses = [];
      document.getElementById("guessedLetters").innerHTML = letterGuesses;
      randomIndex = Math.floor(Math.random() * alphabet.length);
      computerChoice = alphabet[randomIndex];
      console.log(computerChoice);
      remainingGuesses = 10;
      document.getElementById("guessesRemaining").innerHTML = 10;
    } else {
      console.log("Guess again!");
      document.getElementById("guessesRemaining").innerHTML = remainingGuesses--;
      letterGuesses.push(userChoice);
      document.getElementById("guessedLetters").innerHTML = letterGuesses;
    }
}