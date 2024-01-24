// // ########################## ***  FIST CHALLENGE *** ##########################

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let	title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function	verifyClick() {
	console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function	clickAlert() {
	alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function	clickPrompt() {
	let	city = prompt('Diga o nome de uma cidade do Brasil.');
	alert(`Estive em ${city} e lembrei de você.`);
}

// Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function	clickSum() {
	let	nbr1 = parseInt(prompt('Digite um número à ser somado.'));
	let	nbr2 = parseInt(prompt('Digite outro número à ser somado.'));
	let	result = nbr1 + nbr2;
	alert(`O resultado da soma de ${nbr1} e ${nbr2} é ${result}`);
}

// Criar uma função que exibe "Olá, mundo!" no console.
function	hellWorld() {
	console.log('Hello, World!');
}

hellWorld();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function	hellName(name) {
	console.log(`Hello, ${name}.`);
}
// let	sayName = prompt('Digite seu nome');
hellName('Gabi');
// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function	doubleNUmber(number) {
	return parseInt(number * 2);
}

let	result = doubleNUmber(8);
console.log(result);
// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function	mediaNumber(nbr1, nbr2, nbr3) {
	let	soma = parseInt(nbr1 + nbr2 + nbr3);
	let	result = parseInt(soma / 3);
	// return (nbr1 + nbr2 + nbr3) / 3;
	return result;
}

console.log(mediaNumber(10, 15, 20));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function	maxNumber(nbr1, nbr2) {
	// return a > b ? a : b;
	if (nbr1 > nbr2) {
		return nbr1;
	}
	else {
		return nbr2;
	}
}

console.log(maxNumber(10, 1));

// Criar uma função que recebe um número como parâmetro e retorna 
// o resultado da multiplicação desse número por ele mesmo

function	squareNumber(number) {
	return parseInt(number * number);
	// return numero * numero;
}

let	result2 = squareNumber(8);
console.log(result2);

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
// a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function	getImc(height, weight) {
	let	squareHeight = parseInt(height * height);
	let	icm = weight / squareHeight;
	console.log(icm);
}

getImc(1.7, 90);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function	fatorialNumber(nbr) {
	let	factorial = 1;
	let	i = 2;

	if (nbr === 0 || nbr === 1) {
		return 1;
	}
	while (i <= nbr) {
		factorial *= i;
		i++;
	}
	console.log(factorial);
}

fatorialNumber(6);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor 
// equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80. 
function	convertDollartoreal(value) {
	return ((value * 4.8).toFixed(2))
}

console.log(convertDollartoreal(40));

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.

function	areaRectangular(height, width) {
	let	area = height * width;
	let	perimeter = 2 * (height + width);

	console.log(`Rectangular area ${area} square meters.`);
	console.log(`Perimiter ${perimeter} meters.`);
}

areaRectangular(3, 5);


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function	areaCircle(radius) {
	let	area = Math.PI * radius * radius;
	let	perimeter = 2 * Math.PI * radius;

	console.log(`Circle area ${area.toFixed(2)} square meters.`);
	console.log(`Perimiter ${perimeter.toFixed(2)} meters.`);
}

areaCircle(8);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function	multiplicationTable(nbr) {
	let	i = 0;

	while (i <= 10) {
		let	result = nbr * i;
		console.log(`${nbr} x ${i} = ${result}`);
		i++;
	}
}

multiplicationTable(8);

// Crie uma lista vazia, com o nome listaGenerica.


// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com 
// os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.


// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.


// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.


// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.


// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.



