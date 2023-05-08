let userGuess;
var guessNumber = Math.floor(Math.random() * 100);
let count = 1;

do {
	userGuess = prompt('Guess a number between 1 and 100: ');

	if(userGuess > guessNumber){
		alert('Too high! Guess again.')
		count ++;
    } else if(userGuess < guessNumber) {
        alert('Too low! Guess again.')
        count ++;
    }
    
} while (userGuess != guessNumber)


alert(`Congratulations, you guessed the number in ${count} tries`)
