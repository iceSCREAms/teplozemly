// let menuBtn = document.querySelector('.menu__icon');
// let menu = document.querySelector('.nav');

// menuBtn.addEventListener('click', function(){
// 	menu.classList.toggle('active');
// })

let menuBtn = document.querySelector('.menu__icon');
let menu = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})