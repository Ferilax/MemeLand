"use strict";


const controller = document.querySelector('.controllers');
const controllerMinus = document.querySelector('.controllers__btn-minus');
const controllerPlus = document.querySelector('.controllers__btn-plus');
let FZcounter = 50;
const controllerFZ = document.querySelector('.controllers__font-size');
const main = document.querySelector('.main');



controller.addEventListener("click", function(e) {
	let minus = e.target.closest('.controllers__btn-minus');
	let plus = e.target.closest('.controllers__btn-plus');
	
	if (minus) {
		FZcounter = FZcounter - 1;
		main.style.fontSize = `${FZcounter}px`;
		controllerFZ.value = `${Math.round(FZcounter)}px`
		console.log(FZcounter)
	}
	
	if (plus) {
		FZcounter = FZcounter + 1;
		main.style.fontSize = `${FZcounter}px`;
		controllerFZ.value = `${Math.round(FZcounter)}px`
		console.log(FZcounter)
	}
});

controllerFZ.addEventListener("focus", function(e) {
	this.value = ``;
	console.log(FZcounter)
});
controllerFZ.addEventListener("blur", function(e) {
	FZcounter = +this.value;
	main.style.fontSize = `${FZcounter}px`;
	this.value = `${Math.round(FZcounter)}px`
	console.log(FZcounter)
});


const memeOneinputPhoto = document.querySelectorAll('.meme-1__input-img');
const memeOnephoto = document.querySelector('.meme-1__img');


memeOneinputPhoto.forEach(el => {
	el.addEventListener("change", function(e) {
		let selectedFile = this.files[0];

		//? Получаем URL изображения
		let fileURL = URL.createObjectURL(selectedFile);

		this.nextElementSibling.src = fileURL;
		ibg();
	});
});

const AllPseudoTextAreas = document.querySelectorAll('.pseudo-textarea');
AllPseudoTextAreas.forEach(el => {
	el.addEventListener("focus", function(e) {
		this.innerHTML = '';
	});
	el.addEventListener("click", function(e) {
		this.contentEditable = true;
		this.focus();
	});
	el.addEventListener("blur", function(e) {
		this.contentEditable = false;
		if (this.innerHTML == false) {
			this.innerHTML = 'text';
		}
	});
});

const memeOneDownload = document.querySelector('.meme-1__download');

memeOneDownload.addEventListener("click", function(e) {
	if (document.querySelector('canvas')) {
		document.querySelector('canvas').remove();
	}
	html2canvas(document.querySelector("#memeOne")).then(canvas => {
		document.body.appendChild(canvas);
		//let img = canvas.toDataURL("image/png");
		this.href = document.querySelector('canvas').toDataURL("image/png");
		//document.write('<img src="'+img+'"/>');
	});
});

//? ibg
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();
