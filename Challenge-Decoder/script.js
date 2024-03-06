const textarea = document.querySelector(".textArea");
const message = document.querySelector(".message");

function	btnEncrypt() {
	const	encryptedText = encrypt(textarea.value);
	message.value = encryptedText;
	textarea.value = "";

}

function	btnDecrypt() {
	const	encryptedText = decrypt(textarea.value);
	message.value = encryptedText;
	textarea.value = "";

}

function	btnCopy() {
	let copyText = document.querySelector(".message");

	document.querySelector("#copy").addEventListener("click", function () {
		navigator.clipboard.writeText(copyText.innerText)
			.then(function () {
				alert("Text copied");
			})
			.catch(function (err) {
				console.error('Unable to copy text', err);
			});
	});
}

// let	test = "text de test";
// let	testCriptografado = "tenderxtober denter";

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
	result = string.toLowerCase();

	for (i = 0; i < matrix.length; i++) {
		if (result.includes(matrix[i][0])) {
			result = result.replaceAll(matrix[i][0], matrix[i][1])
		}
	}
	return (result);
}

function	decrypt(string) {
	let	result = string.toLowerCase()

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
