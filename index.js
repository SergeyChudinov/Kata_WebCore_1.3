'use strict';

const button = document.querySelector('.content__button');
const buttonText = document.querySelector('.content__button-text')
const hiddenText = document.querySelector('.content__description-text_hidden');
const buttonImg = document.querySelector('.content__button-images');

button.addEventListener('click', () => {
	hiddenText.classList.toggle('content__description-text_hidden');

	if (buttonText.textContent.trim() === 'Читать далее') {
		buttonText.textContent = 'Скрыть';
		buttonImg.style.transform = 'rotate(180deg)';
	} else {
		buttonText.textContent = 'Читать далее';
		buttonImg.style.transform = 'rotate(0deg)';
	}
})



