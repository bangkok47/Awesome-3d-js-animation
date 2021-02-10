const container = document.querySelector('.container');
const card = document.querySelector('.card');

//items
const productImg = document.querySelector('.product img');
const title = document.querySelector('.title');
const productInfo = document.querySelector('.product-info');
const size = document.querySelector('.size');
const purchase = document.querySelector('.purchase');

//card animation
container.addEventListener('mousemove', (event) => {
	let moveX = (window.innerWidth / 2 - event.pageX) / 12;
	let moveY = (window.innerHeight / 2 - event.pageY) / 12;
	card.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
	//
	title.style.transform = "translateZ(150px)";
	productImg.style.transform = "translateZ(150px) rotateZ(-30deg)";
	productInfo.style.transform = "translateZ(150px)";
	size.style.transform = "translateZ(150px)";
	purchase.style.transform = "translateZ(150px)";
});

//card animation off
container.addEventListener('mouseleave', (event) => {
	card.style.transform = `rotateX(0deg) rotateY(0deg)`;
	//
	title.style.transform = "translateZ(0px)";
	productImg.style.transform = "translateZ(0px)";
	productInfo.style.transform = "translateZ(0px)";
	size.style.transform = "translateZ(0px)";
	purchase.style.transform = "translateZ(0px)";
});