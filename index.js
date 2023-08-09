// 'use strict';

// const button = document.querySelector('.content__button');
// const buttonText = document.querySelector('.content__button-text')
// const buttonImg = document.querySelector('.content__button-images');
// const text = document.querySelector('.content__description-container');
// const html = document.documentElement;

// function resizeFunction() {
// 	const avalWidth = window.screen.availWidth < 768 ? 'phone' : window.screen.availWidth < 1120 ? 'laptop' : 'desktop';
	
// 	let px;
// 	let scale;

// 	function fontScale(screenWidth) {
// 		scale = (window.screen.availWidth / screenWidth);
// 		px = scale * 14;
// 		html.style.fontSize = `${px}px`;
// 		document.querySelector('.content__button-text').style.fontSize = `${px}px`;
// 	}
	
// 	let textHeight;
// 	if (avalWidth === 'phone') {
// 		fontScale(320)
// 		textHeight = [`${90 * scale}px`, '100%']
// 	} else if (avalWidth === 'laptop') {
// 		textHeight = ['140px', '70%']
// 	} else {
// 		textHeight = ['140px', '70%']
// 	}
	
// 	console.log(scale)
// 	console.log(px)
	
// 	let isVisible = false;

// 	if (!isVisible) {
// 		text.style.height = textHeight[0];
// 		buttonText.textContent = 'Читать далее';
// 		buttonImg.style.transform = 'rotate(0deg)';
// 	}
	
// 	button.addEventListener('click', () => {
	
// 		if (!isVisible) {
// 			text.style.height = textHeight[1];
// 			buttonText.textContent = 'Скрыть';
// 			buttonImg.style.transform = 'rotate(180deg)';
// 			isVisible = true;
// 		} else {
// 			text.style.height = textHeight[0];
// 			buttonText.textContent = 'Читать далее';
// 			buttonImg.style.transform = 'rotate(0deg)';
// 			isVisible = false;
// 		}
// 	})
// }

// resizeFunction();

// window.addEventListener('resize', () => {
// 	resizeFunction();
// })
