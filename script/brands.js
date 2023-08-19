function openUpContent(btn, container, img, text) {
  const brandBtn = document.querySelector(btn);
  const slider = document.querySelector(container);
  const buttonImg = document.querySelector(img);
  const buttonText = document.querySelector(text);

  let sliderIsOpened = false;

  brandBtn.addEventListener('click', () => {
    if (sliderIsOpened) {
      slider.style.height = '200px';
      slider.style.marginBottom = '24px';
      buttonImg.style.transform = 'rotate(0deg)';
      buttonText.textContent = 'Показать все';
    } else {
      slider.style.height = '100%';
      slider.style.marginBottom = '0px';
      buttonImg.style.transform = 'rotate(180deg)';
      buttonText.textContent = 'Скрыть';
    }

    sliderIsOpened = !sliderIsOpened;
  });
}

openUpContent('.brands__button', '.brands__slider', '.brands-button__images', '.brands__button .brands-button__text');