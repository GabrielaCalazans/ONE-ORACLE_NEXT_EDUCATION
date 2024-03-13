let	textArea = document.querySelector("#text");
textArea.addEventListener('input', autoResize, false);
// let	message = document.querySelector("#message");
// message.addEventListener('input', autoResize, false);

function autoResize() {
	this.style.height = 'auto';
	this.style.height = this.scrollHeight + 'px';
}
