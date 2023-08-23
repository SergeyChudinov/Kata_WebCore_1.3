window.addEventListener('DOMContentLoaded', () => {
  function openUpContent(btn, container, img, text) {
    const brandBtn = document.querySelector(btn);
    const brands = document.querySelector(container);
    const buttonImg = document.querySelector(img);
    const buttonText = document.querySelector(text);

    let sliderIsOpened = false;

    brandBtn.addEventListener('click', () => {
      if (sliderIsOpened) {
        if (container === '.brands') {
          brands.classList.remove('show-more');
        } else if (container === '.content__description-text_display_none') {
          brands.style.display = 'none';
        }
        buttonImg.style.transform = 'rotate(0deg)';
        buttonText.textContent = 'Показать все';
      } else {
        if (container === '.brands') {
          brands.classList.add('show-more');
        } else if (container === '.content__description-text_display_none') {
          brands.style.display = 'block';
        }
        buttonImg.style.transform = 'rotate(180deg)';
        buttonText.textContent = 'Скрыть';
      }
      sliderIsOpened = !sliderIsOpened;
    });
  }

  openUpContent(
    '.brands__button',
    '.brands',
    '.brands__button img',
    '.brands__button p',
  );
  openUpContent(
    '.content__button',
    '.content__description-text_display_none',
    '.content__button img',
    '.content__button p',
  );

  function menuToggle() {
    const burgerBtn = document.querySelector('.header__list-item_burger');
    const crossBtn = document.querySelector('.menu__list-item_cross');
    const menu = document.querySelector('.menu ');
    const contentBtn = document.querySelector('.content');

    burgerBtn.addEventListener('click', e => {
      e.stopImmediatePropagation();
      menu.style.display = 'block';
    });
    crossBtn.addEventListener('click', () => {
      menu.style.display = 'none';
    });
    contentBtn.addEventListener('click', e => {
      if (
        !e.target.closest('.menu') &&
        window.innerWidth > 767 &&
        window.innerWidth < 1120
      ) {
        menu.style.display = 'none';
      }
    });
  }
  menuToggle();

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      }
      if (swiper !== undefined) swiper.destroy(true, true);
      return;
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper('(max-width: 768px)', '.slider-1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
});
