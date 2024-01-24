/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: gacalaza <gacalaza@student.42sp.org.br     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/22 19:54:49 by gacalaza          #+#    #+#             */
/*   Updated: 2024/01/23 22:22:23 by gacalaza         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// let	title = document.querySelector('h1');
// title.innerHTML = 'Secret Number Game';

// let	paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Choose a number between 1 and 10';

// let	secretNumber = 10;
let	listOfSortedNumbers = [];
let	maxElements = 10;
let	secretNumber = generateNumber();
let	tries = 1;

function	put_text(tag, text) {
	let	field = document.querySelector(tag);
	field.innerHTML = text;
}

function	startMessage() {
	put_text('h1', 'Secret Number Game');
	put_text('p', `Choose a number between 1 and ${maxElements}`);
}

startMessage();

function	verifyGuess() {
	let	guess = document.querySelector('input').value
	let	phrase = guess > secretNumber ? `The secret number is less than ${guess}.` : `The secret number is greater than ${guess}`
	
	// console.log(secretNumber == guess);
	if (guess == secretNumber) {
		let	word = tries > 1 ? 'tries' : 'try';
		let	message = `You're right! It is ${secretNumber}. You discovered the secret number in ${tries} ${word}.`;
		put_text('h1', message);
		put_text('p', 'Congratulations!');
		document.getElementById('reiniciar').removeAttribute('disabled');
	}
	else {
		if (guess > secretNumber) {
			put_text('p', phrase);
		}
		else {
			put_text('p', phrase)
		}
	}
	tries++;
	cleanField();
}

function	generateNumber() {
	let	chosenNbr = parseInt(Math.random() * maxElements + 1);
	let	amountListElements = listOfSortedNumbers.length;

	if (amountListElements == maxElements) {
		listOfSortedNumbers = [];
	}
	if (listOfSortedNumbers.includes(chosenNbr)) {
		return generateNumber();
	}
	else {
		listOfSortedNumbers.push(chosenNbr)
		console.log(listOfSortedNumbers);
		return chosenNbr;
	}
	// return parseInt(Math.random() * 10 + 1);
}

function	cleanField() {
	guess = document.querySelector('input');
	guess.value = '';
}

function	restartGame() {
	secretNumber = generateNumber();
	cleanField();
	tries = 1;
	startMessage();
	document.getElementById('reiniciar').setAttribute('disabled', true);
}