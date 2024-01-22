/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   pactice_tests.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: gacalaza <gacalaza@student.42sp.org.br     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/01/21 14:35:57 by gacalaza          #+#    #+#             */
/*   Updated: 2024/01/22 19:13:56 by gacalaza         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// // let	name = 'moon';
// // let	age = 25;
// let	salesNumber = 30;
// console.log(salesNumber);
// let	balanceAvailable = 1000;
// console.log(balanceAvailable);
// let	errorMessage = 'Error! Fill in all the fields';

// let	name = prompt('Type your name');
// console.log(name);
// let	age = prompt('Type your age');

// if (age > 17) {
// 	alert('You can get your driving license!');
// 	console.log(age, 'Wooow, getting old Padawan');
// }
// else {
// 	console.log(age, 'Too young, Padawan!');
// }
// alert(errorMessage);

// alert('Bem-vindo ao jogo do número secreto');
// let chute = prompt('Escolha um número entre 1 e 10');

// let numeroSecreto = 4;

// console.log(chute == numeroSecreto);
// if (chute == numeroSecreto) {
// 	alert('Acertou! ' + chute + ' é o número secreto.');
// } else {
// 	alert('O número secreto era ' + numeroSecreto + ' e você escolheu ' + chute);
// }

// let	porcentagemDesconto = 0;
// console.log('porcentagemDesconto Inicio: ', porcentagemDesconto);

// alert('Bem-vindxs ao Jornada Milhas, a maior roubada');
// let	quantidadeMilhas = prompt('Digite o seu número de milhas');

// if(quantidadeMilhas > 5000) {
// 	if (quantidadeMilhas > 30000)
// 	{
// 		porcentagemDesconto = 10;
// 	}
// 	else {
// 		porcentagemDesconto =  20
// 	}
// }

// console.log(`quantidadeMilhas ${quantidadeMilhas}`);
// // if(quantidadeMilhas > 30000){
// // 	porcentagemDesconto =  20;
// // } 
// // else {
// // 	porcentagemDesconto = 0;
// // }
// console.log('porcentagemDesconto Pós calculos', quantidadeMilhas);

// alert('Com este total de ' + quantidadeMilhas);
// alert('Você terá ' + porcentagemDesconto + '% de desconto.');

// // ############################## TESTES 0 INICIO #########################
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// alert("Welcome to tests SA");

// let	day = prompt('Hoje é qual é dia da semana?');
// console.log(day);

// console.log(day == 'sábado' || day == 'Sábado' || day == 'Domingo' || day == 'domingo')
// if (day == 'sábado' || day == 'Sábado' || day == 'Domingo' || day == 'domingo') {
// 	alert("Bom fim de semana!");
// }
// else {
// 	alert('Boa semana!');
// }

// // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let	number = prompt('Digite um número.');
// console.log(number);

// if (number > 0) {
// 	alert(number + ' é um número positivo.');
// }
// if (number < 0) {
// 	alert(number + ' é um número negativo.');
// }

// // Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// let	score = prompt("Digite sua pontuação.");
// console.log(score);

// if (score >= 100) {
// 	alert('Parabéns, você venceu!');
// }
// if (score < 100) {
// 	alert('Tente novamente para ganhar.');
// }

// // Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let	balance = 1500.00;

// alert('Seu saldo é de : R$ ' + balance);

// // Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome

// let	name = prompt('Insira o seu nome');
// alert('Seja bem-vindx ' + name);


// let	qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// let	soma = 0;
// let	contador = qtdNumeros;

// while(contador > 0){
// 	let numero = parseInt(prompt('Digite o número:'));
// 	soma += numero;
// 	contador--;
// }
// let	media = soma / qtdNumeros;
// console.log(media);

// // ############################## TESTES 1 INICIO #########################

// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let	contador = 0;

// while (contador < 10) {
// 	contador++;
// 	console.log(contador);
// }

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let	contador = 10;

// while (contador >= 0) {
// 	console.log(contador);
// 	contador--;
// }


// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let	contador = prompt("Digite um número para a contagem.");

// while (contador >= 0) {
// 	console.log(contador);
// 	contador--;
// }

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let	contador = prompt("Digite um número para a contagem.");
// let	i = 0;

// while (contador >= i) {
// 	console.log(i);
// 	i++;
// }

// // ############################## TESTES 2 INICIO #########################

// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
	console.log('Bem-vindxs ao Meu App');
// Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
	let	nome = 'Gabriela';
	console.log(`Olá, ${nome}!`);
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
	alert('Olá, ' + nome + '!');
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
	let	linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta?');
	console.log(linguagemPreferida);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
	let	valor1 = 9;
	let	valor2 = 77;
	let	resultado = valor1 + valor2;
	console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
// Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
	let	resultado2 = valor1 - valor2;
	console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado2}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa 
// é maior ou menor de idade, exibindo uma mensagem apropriada no console.
	let	idade = prompt('Insira a sua idade.');

	if (idade >= 18) {
		console.log('Você é maior de idade.');
	}
	else {
		console.log('Você é menor de idade.');
	}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.
	let	numero = prompt('Digite um valor.');

	if (numero > 0) {
		console.log(numero + ' é um número positivo.');
	}
	else if (numero < 0) {
		console.log(numero + ' é um número negativo.');
	}
	else {
		console.log('O número é zero.');
	}

// Use um loop while para imprimir os números de 1 a 10 no console.
	let	contador = 0;

	while (contador < 10) {
		contador++;
		console.log(contador);
	}


// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual 
// a 7 e exiba "Aprovado" ou "Reprovado" no console.
	let	nota = 9;

	if (nota >= 7) {
		console.log('Aprovado.');
	}
	else {
		console.log('Reprovado.');
	}


// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

	let = numeroAleatorio = Math.random();
	console.log(numeroAleatorio);
// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
	let	numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
	console.log(numeroAleatorio2);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
	let	numeroAleatorio3 = parseInt(Math.random() * 100 + 1);
	console.log(numeroAleatorio3);

// // ############################## TESTES 3 INICIO #########################

