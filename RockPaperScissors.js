var userInput = 'rock';
userInput = userInput.toLowerCase();

function getComputerChoice() {
  var random = Math.floor(Math.random() * 2);
  switch (random) {
    case 0: 
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "tie";
  } if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return "computer won";
    } else {
      return "user won";
    } if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return "user won";
      } else {
        return "computer won";
      } if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
          return "user won";
        } else{
          return "computer won";
        }
      } 
    }
  }
}

function playGame () {
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
