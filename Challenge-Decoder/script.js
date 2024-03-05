const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function	btnEncrypt() {
	const	encryptedText = encrypt(textArea.value);
	message.value = encryptedText;
	textArea.value = "";

}

let	test = "text de test";
let	testCriptografado = "tenderxtober denter";

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// function	encrypt(string) {
// 	const	result = string.toLowerCase()

// 	if (result.includes("e")) {
// 		result = result.replaceAll("e", "enter");
// 	}
// 	if (result.includes("i")) {
// 		result = result.replaceAll("i", "imes");
// 	}
// 	if (result.includes("a")) {
// 		result = result.replaceAll("a", "ai");
// 	}
// 	if (result.includes("o")) {
// 		result = result.replaceAll("o", "ober");
// 	}
// 	if (result.includes("u")) {
// 		result = result.replaceAll("u", "ufat");
// 	}
// 	return result;
// }

function encrypt(string) {
	let	matrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
	string = string.toLowerCase();

	for (i = 0; i < string.lenght; i++) {
		if (string.includes(matrix[i][0])) {
			string = string.replaceAll(matrix[i][0], matrix[i][1])
		}
	}
	return string;
}

function	decrypt(string) {
	const	result = string.toLowerCase()

	if (result.includes("enter")) {
		result = result.replaceAll("enter", "e");
	}
	if (result.includes("imes")) {
		result = result.replaceAll("imes", "i");
	}
	if (result.includes("ai")) {
		result = result.replaceAll("ai", "a");
	}
	if (result.includes("ober")) {
		result = result.replaceAll("ober", "o");
	}
	if (result.includes("ufat")) {
		result = result.replaceAll("ufat", "u");
	}
	return result;
}