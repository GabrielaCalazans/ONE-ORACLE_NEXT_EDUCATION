/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: gacalaza <gacalaza@student.42sp.org.br>    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/21 13:52:01 by gacalaza          #+#    #+#             */
/*   Updated: 2024/01/21 14:36:09 by gacalaza         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let	welcomeMessage = 'Welcome to the game Secret Number!';
let	secretNumber = 29;

alert(welcomeMessage);

let	guess = prompt('Choose a number between 1 and 30');

if (secretNumber == guess) {
	console.log('That is it! You got the secret number right', secretNumber);
}
else {
	console.log('Wrong guessed, Padawan!');
}