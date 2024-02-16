document.addEventListener('DOMContentLoaded', function () {
  const choices = ["rock", "paper", "scissor"];

  const playerHand = document.querySelectorAll('.hand');
  const computerHand = document.createElement('img');
  const messages = document.getElementById('messages');
  const resultMessage = document.getElementById('resultmessage');
  const playAgainBtn = document.getElementById('playAgain');
  const resetGameBtn = document.getElementById('resetScore');
  const winCount = document.getElementById('win');
  const loseCount = document.getElementById('lose');

  let playerChoice;
  let computerChoice;
  let win = 0;
  let lose = 0;

  // Function to randomly select computer's choice
  function computerPlay() {
    return choices[Math.floor(Math.random() * 3)];
  }

  // Function to reset the game
  function resetGame() {
    messages.children[0].innerText = "";
    messages.children[1].innerText = "";
    resultMessage.children[0].innerText = "";
    playAgainBtn.classList.add('hide');
    currentPlayer = 1;
    hand.addEventListener 
    updateTurnMessage();
  }

  function resetScore() {
    win = 0
    lose = 0
    winCount.innerHTML = `Win: 0`;
    loseCount.innerHTML = `Lose: 0`;
  }

  // Function to determine the winner
  function determineWinner(player, computer) {
    if (player === computer) {
      return "It's a tie!";
    } else if ((player === "rock" && computer === "scissor") || 
               (player === "paper" && computer === "rock") || 
               (player === "scissor" && computer === "paper")) {
      win++;
      winCount.innerText = `Win: ${win}`;
      return "You win!";
    } else {
      lose++;
      loseCount.innerText = `Lose: ${lose}`;
      return "Computer wins!";
    }
  }

  // Function to display the choices and result
  function displayResult(player, computer, result) {
    messages.children[0].innerText = `Player chose: ${player}`;
    messages.children[1].innerText = `Computer chose: ${computer}`;
    resultMessage.children[0].innerText = result;
    playAgainBtn.classList.remove('hide');
    playAgainBtn.disabled = false;
    playerHand.forEach(hand => {
      hand.addEventListener('no', function () {
        playerChoice = this.id;
        animateComputerThinking();
      });
    });
  
  }

  // Function to animate computer thinking
  function animateComputerThinking() {
    const delay = Math.floor(Math.random() * 100); // Random delay up to 5 seconds
    setTimeout(() => {
      computerChoice = computerPlay();
      computerHand.src = `${computerChoice}.png`;
      computerHand.alt = "Computer's Hand";
      computerHand.classList.remove('hide');
      displayResult(playerChoice, computerChoice, determineWinner(playerChoice, computerChoice));
    }, delay);
  }

  // Event listeners for player's choice
  playerHand.forEach(hand => {
    hand.addEventListener('click', function () {
      playerChoice = this.id;
      animateComputerThinking();
    });
  });

  playAgainBtn.addEventListener('click', resetGame);
  // Event listener for Reset Score button
  resetGameBtn.addEventListener('click', resetScore);

});
