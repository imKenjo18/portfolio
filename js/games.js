document.getElementById('playguessinggame').addEventListener('click', () => {
	document.querySelector('.guessing-overlay').style.display = 'none';
  document.querySelector('.guessing-game-end-overlay').style.display = 'none';
  document.querySelector('.guessing-game-overlay').style.display = 'flex';
  document.querySelector('.guessing-game-category-overlay').style.display = 'flex';
  guessingGameScore.innerText = `Score: ${score}`
  guessingGameMessage.innerText = 'Choose category';
  guessesLeft = 3;
  clearGuessInput();
})

document.querySelector('.guessing-game-close').addEventListener('click', () => {
  document.querySelector('.guessing-game-overlay').style.display = 'none';
})

document.getElementById('playtictactoe').addEventListener('click', () => {
  document.querySelector('.tictactoe-overlay').style.display = 'flex';
})

document.querySelector('.tictactoe-close').addEventListener('click', () => {
  document.querySelector('.tictactoe-overlay').style.display = 'none';
})