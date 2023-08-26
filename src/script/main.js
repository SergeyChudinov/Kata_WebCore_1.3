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

  function modalToggle(
    openSelector,
    closeSelector,
    modalSelector,
    contentSelector,
  ) {
    const openBtn = document.querySelectorAll(openSelector);
    const closeBtn = document.querySelector(closeSelector);
    const modal = document.querySelector(modalSelector);
    const content = document.querySelector(contentSelector);
    const modals = document.querySelectorAll('.modal');
    const modalsClose = document.querySelectorAll('.modal_close');
    const contentBlock = document.querySelector('.content__block');
    const footerBlock = document.querySelector('.footer');

    function calcScroll() {
      const div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    }
    const csroll = calcScroll();

    function filterToggle(grayscale, blur, opacity, overflow, scroll) {
      contentBlock.style.filter = `grayscale(${grayscale}) blur(${blur}) opacity(${opacity})`;
      footerBlock.style.filter = `grayscale(${grayscale}) blur(${blur}) opacity(${opacity})`;
      document.body.style.overflow = overflow;
      document.body.style.marginRight = `${scroll}px`;
    }

    openBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopImmediatePropagation();
        if (window.innerWidth > 1120) {
          modalsClose.forEach(mod => {
            mod.style.display = 'none';
          });
          modal.style.display = 'block';
        } else {
          modals.forEach(mod => {
            mod.style.display = 'none';
          });
          modal.style.display = 'block';
        }
        filterToggle('80%', '5px', '0.5', 'hidden', csroll);
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      filterToggle('0', '0', '1', '', '0');
    });

    content.addEventListener('click', e => {
      e.stopImmediatePropagation();
      if (
        !e.target.closest('.modal') &&
        window.innerWidth > 767 &&
        window.innerWidth < 1120
      ) {
        modals.forEach(mod => {
          mod.style.display = 'none';
          contentBlock.style.filter = 'grayscale(0) blur(0) opacity(1)';
          footerBlock.style.filter = 'grayscale(0) blur(0) opacity(1)';
        });
      }
    });
  }
  modalToggle('.header__list-item_burger', '.cross_menu', '.menu', '.content');
  modalToggle(
    '.menu-items__list-item_call',
    '.cross_call',
    '.modal_call',
    '.content',
  );
  modalToggle(
    '.menu-items__list-item_chat',
    '.cross_chat',
    '.modal_chat',
    '.content',
  );

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
  resizableSwiper('(max-width: 768px)', '.slider-3', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
  });

  const mask = (selector) => {
    function createMask() {
      const matrix = '+7 (___) ___ __ __';
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
    }
  
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  };
  
  mask('[name="phone"]');

  const checkTextInputs = selector => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
      input.addEventListener('keypress', function (e) {
        if (e.key.match(/[^а-яё 0-9]/gi)) {
          e.preventDefault();
        }
      });
    });
  };

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});
