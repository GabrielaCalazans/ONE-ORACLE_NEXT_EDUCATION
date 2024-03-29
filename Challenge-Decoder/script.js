const	textarea = document.querySelector(".textArea");
const	message = document.querySelector(".message");
const	textInput = document.querySelector("#text");

textarea.addEventListener("paste", function () {
	const regex = /^[0-9a-z\s]+$/;
	const self = this;

	setTimeout(function() {
		const text = self.value;

		if (!regex.test(text)) {
			self.value = "";
			alert(`Insert only lowercase letters. Do not insert special characters or accented letters.`);
		}
	}, 500);
});

textInput.addEventListener("keypress", function(c) {
	if (!checkChar(c)) {
		c.preventDefault();
		alert(`Insert only lowercase letters. Do not insert special characters or accented letters.`);
	}
});

function	checkChar(c) {
	const	char = String.fromCharCode(c.keyCode);
	const	pattern = /^[0-9a-z\s]+$/;

	if (char.match(pattern)) {
		console.log(char);
		console.log(c.keyCode);
		return true;
	}
}

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
	let copyText = document.getElementById("message");
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	document.execCommand("copy");
	alert(`Text copied.`);
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
