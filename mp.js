document.addEventListener('DOMContentLoaded', function () {
  const choices = ["rock", "paper", "scissors"];
  const playerHand = document.querySelectorAll('.hand');
  const messages = document.getElementById('messages');
  const resultMessage = document.getElementById('resultmessage');
  const playAgainBtn = document.getElementById('playAgain');
  const resetGameBtn = document.getElementById('resetScore');
  const turnMessage = document.getElementById('turn');
  const player1WinCount = document.getElementById('win');
  const player2WinCount = document.getElementById('lose');

  let player1Choice;
  let player2Choice;
  let player1Wins = 0;
  let player2Wins = 0;
  let currentPlayer = 1;

  // Function to reset the game
  function resetGame() {
    messages.children[0].innerText = "";
    messages.children[1].innerText = "";
    resultMessage.children[0].innerText = "";
    playAgainBtn.classList.add('hide');
    currentPlayer = 1;
    updateTurnMessage();
  }

  function resetScore() {
    player1Wins = 0 
    player2Wins = 0
    player1WinCount.innerHTML = `Player 1's Wins:: 0`;
    player2WinCount.innerHTML = `Player 2's Wins: 0`;
  }

  // Function to update turn message
  function updateTurnMessage() {
    turnMessage.innerText = `Player ${currentPlayer}'s Turn`;
  }

  // Function to determine the winner
  function determineWinner(player1, player2) {
    if (player1 === player2) {
      return "It's a tie!";
    } else if ((player1 === "rock" && player2 === "scissors") || 
               (player1 === "paper" && player2 === "rock") || 
               (player1 === "scissors" && player2 === "paper")) {
      player1Wins++;
      player1WinCount.innerText = `Player 1 Wins: ${player1Wins}`;
      return "Player 1 wins!";
    } else {
      player2Wins++;
      player2WinCount.innerText = `Player 2 Wins: ${player2Wins}`;
      return "Player 2 wins!";
    }
  }

  // Function to display the choices and result
  function displayResult(player1, player2, result) {
    messages.children[0].innerText = `Player 1 chose: ${player1}`;
    messages.children[1].innerText = `Player 2 chose: ${player2}`;
    resultMessage.children[0].innerText = result;
    playAgainBtn.classList.remove('hide');
  }

  // Event listeners for player's choice
  playerHand.forEach(hand => {
    hand.addEventListener('click', function () {
      if (currentPlayer === 1) {
        player1Choice = this.id;
        currentPlayer = 2;
      } else {
        player2Choice = this.id;
        displayResult(player1Choice, player2Choice, determineWinner(player1Choice, player2Choice));
        currentPlayer = 1;
      }
      updateTurnMessage();
    });
  });

  // Event listener for Play Again button
  playAgainBtn.addEventListener('click', resetGame);
  // Event listener for Reset Score button
  resetGameBtn.addEventListener('click', resetScore);

});
