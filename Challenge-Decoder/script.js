// const input_text = document.querySelector("miniput-text");
// const input_message = document.querySelector("miniput-message");

// // metodo manipulação string - replace do js
// let	matriz_code = {
// 	["a", "enter"],
// 	["i", "imes"],
// 	["a", "ai"],
// 	["o", "ober"],
// 	["u", "ufat"]
// };

function	btnCriptografar() {

}

let	test = "text de test";
let	testCriptografado = "tenderxtober denter";

function	criptogragar(string) {
	// for (let i = 0/ i < matriz_code.lenght; i++;) {
	// 	if (string.includes(matriz_code[i][0])) {
	// 		let	stringCriptografada = string.replaceAll(matriz_code[i][0], matriz_code[i][1]);
	// 	}
	const	result = string
	.replaceAll("a", "enter")
	.replaceAll("i", "imes")
	.replaceAll("a", "ai")
	.replaceAll("o", "ober")
	.replaceAll("u", "ufat");


	return result;
}

function	criptogragar(string) {
	// for (let i = 0/ i < matriz_code.lenght; i++;) {
	// 	if (string.includes(matriz_code[i][0])) {
	// 		let	stringCriptografada = string.replaceAll(matriz_code[i][0], matriz_code[i][1]);
	// 	}
	const	result = string
	.replaceAll("enter", "e")
	.replaceAll("imes", "i")
	.replaceAll("ai", "a")
	.replaceAll("ober", "o")
	.replaceAll("ufat", "u");


	return result;
}