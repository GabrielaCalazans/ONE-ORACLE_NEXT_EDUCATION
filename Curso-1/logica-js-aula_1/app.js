/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: gacalaza <gacalaza@student.42sp.org.br     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/21 16:46:16 by gacalaza          #+#    #+#             */
/*   Updated: 2024/01/22 19:24:59 by gacalaza         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let	welcomeMessage = 'Welcome to the game Secret Number!';
let	errorMessage = 'Wrong guessed, Padawan!';
let	maxNumber = 5000;
let	secretNumber = parseInt(Math.random() * maxNumber + 1);
let	contratsMessage = `That is it! You got the secret number right, is ${secretNumber}`;

alert(welcomeMessage);

console.log("secret Number " + secretNumber);

let	guess;
let	trys = 1;


while (guess != secretNumber) {
	guess = prompt('Choose a number between 1 and ' + maxNumber);
	console.log("Guess number " + guess);
	console.log('Resultado da comparação:', guess == secretNumber);
	let	tipGreater = `The secret number is greater than ${guess}`;
	let	tipLess = `The secret number is less than ${guess}`;

	if (secretNumber == guess) {
		break;
		console.log(contratsMessage, secretNumber);
	}
	else {
		if (secretNumber > guess) {
			alert(tipGreater);
		}
		if (secretNumber < guess) {
			alert(tipLess);
		}
		console.log(errorMessage + 'attempts ' + trys);
	}
	trys++;
}

let	word = trys > 1 ? 'attemps' : 'attemp';

if (trys > 1) {
	alert(contratsMessage + ` You got it on ${trys} ${word}.`);
}
else {
	alert(contratsMessage + ` You got it on ${trys} ${word}.`);
}

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// let chute = prompt('Escolha um número entre 1 e 10');

// if (chute == numeroSecreto) {
//     console.log('Isso ai! Você descobriu o número secreto (5)');
// }