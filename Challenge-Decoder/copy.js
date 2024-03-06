// function btnCopy() {
// 	let copyText = document.querySelector(".message");
// 	var btnCopy = document.querySelector("#copy");
// 	btnCopy.addEventListener("click", function () {
// 		navigator.clipboard.writeText(copyText.innerText);
// 		alert("Text copied");
// 		// location.reload();
// 	})
// }

// function btnCopy() {
//     let copyText = document.querySelector(".message");

//     document.querySelector("#copy").addEventListener("click", function () {
//         navigator.clipboard.writeText(copyText.innerText)
//             .then(function () {
//                 alert("Text copied");
//             })
//             .catch(function (err) {
//                 console.error('Unable to copy text', err);
//             });
//     });
// }


function btnCopy() {
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



