// "use strict";

const category = [
	{
		type: 'anime',
		words: [
		'naruto',
		'bleach',
		'boruto',
		'one piece',
		'tokyo ghoul'
		]
	},
	{
		type: 'trees',
		words: [
		'birch tree',
		'palm tree',
		'oak tree',
		'mango tree',
		'narra tree'
		]
	}
];

// const categoryButtons = document.querySelectorAll('.guessing-game-category');

// categoryButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     document.querySelector('.guessing-game-category-overlay').style.display = 'none';
//     document.querySelector('.guessing-overlay').style.display = 'flex';
//   })
// })

let guessesLeft = 3;
// let outOfGuesses = false;
let selectCategory = undefined;
let categoryType = undefined;
let secretWord = undefined;
let score = 0;
let hint = null;

document.getElementById('guessing-game-category-anime').addEventListener('click', () => {
	document.querySelector('.guessing-game-category-overlay').style.display = 'none';
  document.querySelector('.guessing-overlay').style.display = 'flex';
	selectCategory = 'anime';
	setCategory();
})

document.getElementById('guessing-game-category-trees').addEventListener('click', () => {
	document.querySelector('.guessing-game-category-overlay').style.display = 'none';
  document.querySelector('.guessing-overlay').style.display = 'flex';
	selectCategory = 'trees';
	setCategory();
})

document.getElementById('guessing-game-category-random').addEventListener('click', () => {
	document.querySelector('.guessing-game-category-overlay').style.display = 'none';
  document.querySelector('.guessing-overlay').style.display = 'flex';
	selectCategory = 'random';
	setCategory();
})

function clearGuessInput() {
	document.getElementById("guessInput").value = '';
}

document.getElementById('guessInput').addEventListener('keypress', (e) => {
	if (e.keyCode == 13) {
		confirmGuess();
		clearGuessInput();
	}
})

function confirmGuess() {
	let guess = document.getElementById('guessInput').value;

	if (categoryType == category[1]) {
		if (!guess.includes('tree')) {
			guess = `${guess} tree`;
		}
	}

	guess = guess.toLowerCase();
	guess = guess.trim();

	// if (categoryType == category[1]) {
	// 	if (!guess.includes('tree')) {
	// 		guess = `${guess} tree`;
	// }

	if (guess != secretWord) {
		guessesLeft--;
		guessesLeftText.innerText = `Guesses left: ${guessesLeft}`
	} else {
		score++;
		guessingGameScore.innerText = `Score: ${score}`
		guessingGameMessage.innerText = `You guessed it!`;
		document.querySelector('.guessing-overlay').style.display = 'none';
		document.querySelector('.guessing-game-end-overlay').style.display = 'flex';
	}

	if (guessesLeft == 0) {
		secretWord = secretWord.toUpperCase();
		guessingGameMessage.innerText = `You ran out of guesses. The secret word was ${secretWord}.`;
		document.querySelector('.guessing-overlay').style.display = 'none';
		document.querySelector('.guessing-game-end-overlay').style.display = 'flex';
	}
}

function replayGuessingGame() {
	document.querySelector('.guessing-overlay').style.display = 'none';
	document.querySelector('.guessing-game-end-overlay').style.display = 'none';
  document.querySelector('.guessing-game-category-overlay').style.display = 'flex';
  guessingGameMessage.innerText = 'Choose category';
  guessesLeft = 3;
}

function setCategory() {
	if (selectCategory == 'anime') {
		categoryType = category[0];
		secretWord = categoryType.words[Math.floor(Math.random() * categoryType.words.length)];
	} else if (selectCategory == 'trees') {
		categoryType = category[1];
		secretWord = categoryType.words[Math.floor(Math.random() * categoryType.words.length)];
	} else if (selectCategory == 'random') {
		categoryType = category[Math.floor(Math.random() * 2)];
		secretWord = categoryType.words[Math.floor(Math.random() * categoryType.words.length)];
	};

	console.log(categoryType);
	console.log(secretWord);
	
	switch(secretWord) {
		case 'naruto':
			hint = 'His father is known as the "Yellow Flash."';
			break;
		case 'bleach':
			hint = 'They have a form called "bankai."';
			break;
		case 'boruto':
			hint = 'The son of the 7th Hokage.';
			break;
		case 'one piece':
			hint = 'The protagonist is the captain of the Straw Hat Pirates.';
			break;
		case 'tokyo ghoul':
			hint = 'The protagonist is a one-eyed ghoul.';
			break;
		case 'birch tree':
			hint = `It's like a cow tree.`;
			break;
		case 'palm tree':
			hint = 'A tree that produces palm oil.';
			break;
		case 'oak tree':
			hint = 'The most common tree in Minecraft.';
			break;
		case 'mango tree':
			hint = 'A tree that first appeared in India over 5,000 years ago.';
			break;
		case 'narra tree':
			hint = 'The Philippine national tree.';
			break;
	}

	guessingGameMessage.innerText = `Hint: ${hint}`;
	guessesLeftText.innerText = `Guesses left: ${guessesLeft}`
	// guessingGameMessage.innerHTML = `<b>Hint: ${hint}<br>Guesses left: ${guessesLeft}</b>`;
}
