function openUpContent(btn, container, img, text) {
  const brandBtn = document.querySelector(btn);
  const brands = document.querySelector(container);
  const buttonImg = document.querySelector(img);
  const buttonText = document.querySelector(text);

  let sliderIsOpened = false;

  brandBtn.addEventListener('click', () => {
    if (sliderIsOpened) {
      brands.classList.remove('show-more');
      buttonImg.style.transform = 'rotate(0deg)';
      buttonText.textContent = 'Показать все';
    } else {
      brands.classList.add('show-more');
      buttonImg.style.transform = 'rotate(180deg)';
      buttonText.textContent = 'Скрыть';
    }
    sliderIsOpened = !sliderIsOpened;
  });
}

openUpContent(
  '.brands__button',
  '.brands',
  '.brands-button__images',
  '.brands__button .brands-button__text',
);

const brandsSwiper = document.querySelector('.brands__swiper');
let firstSlide;

function removeClass() {
  let swiper;
  if (window.innerWidth < 768) {
    brandsSwiper.classList.add('swiper');
    brandsSwiper.classList.remove('brands__container');
    if (!swiper) {
      swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 'auto',
        spaceBetween: 16,
      });
    }
  } else if (window.innerWidth > 767) {
    brandsSwiper.classList.remove('swiper');
    brandsSwiper.classList.add('brands__container');
  }
  firstSlide = document.querySelector('[aria-label="Go to slide 1"]');
  if (firstSlide) {
    firstSlide.click();
  }
}

removeClass();

window.addEventListener('resize', () => {
  removeClass();
});