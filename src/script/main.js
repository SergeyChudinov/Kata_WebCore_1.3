window.addEventListener('DOMContentLoaded', () => {
  function openUpContent(btnSelector, containerSelector, img, text) {
    const btn = document.querySelector(btnSelector);
    const container = document.querySelector(containerSelector);
    const buttonImg = document.querySelector(img);
    const buttonText = document.querySelector(text);

    let sliderIsOpened = false;

    btn.addEventListener('click', () => {
      if (sliderIsOpened) {
        if (
          containerSelector === '.tech-top' ||
          containerSelector === '.tech-middle'
        ) {
          container.classList.remove('show-more');
        } else {
          container.style.display = 'none';
        }
      } else {
        if (
          containerSelector === '.tech-top' ||
          containerSelector === '.tech-middle'
        ) {
          console.log('click');
          container.classList.add('show-more');
        } else {
          container.style.display = 'block';
        }
      }
      buttonImg.style.transform = sliderIsOpened
        ? 'rotate(0deg)'
        : 'rotate(180deg)';
      buttonText.textContent = sliderIsOpened ? 'Показать все' : 'Скрыть';
      sliderIsOpened = !sliderIsOpened;
    });
  }

  openUpContent(
    '.content__button',
    '.content__description-text_display_none',
    '.content__button img',
    '.content__button p',
  );
  openUpContent(
    '.tech-top__button',
    '.tech-top',
    '.tech-top__button img',
    '.tech-top__button p',
  );
  openUpContent(
    '.tech-middle__button',
    '.tech-middle',
    '.tech-middle__button img',
    '.tech-middle__button p',
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
  resizableSwiper('(max-width: 768px)', '.slider-2', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
});
