const readline = require('readline')
const { start } = require('repl')
const rlInterface = readline.createInterface(process.stdin, process.stdout)

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rlInterface.question(questionText, resolve)
  })
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}


async function start() {
  
  console.log("Welcome to the guessing game, you think of a number between 1 and 100, and I guess what it is!\n")

  /* Story 1
    computer guess random number between 1 and 100 and asks if it is correct
    
    if yes, displays wins and number of guesses

    if no, asks higher or lower, and guesses again based on that answer

    * remember to use await ask to get user input
    * await always needs to be in an async function
  */

  /* Story 2
    computer gets right answer in minumum amount of guesses
    (binary search) (guesses in the middle each time)
  */

  /* Story 3
    computer can tell if the player is lying
  */

  /* Story 4
    Given that the game ends (win or lose)
    Player is presented with a question (play again?)

    if yes, plays again, if no, ends the program
  */

  /* Story 5
    At start of game, player can pick the range of numbers
  */

  /* Story 6
    Add in reverse game
    Computer thinks of a number, and you try to guess it
  */
}

start()