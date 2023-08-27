import '../styles/style.css'
import openUpContent from './modules/openUpContent'
import modalToggle from './modules/modalToggle'
import resizableSwiper from './modules/resizableSwiper'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'

window.addEventListener('DOMContentLoaded', () => {
  'use strict'

  openUpContent(
    '.content__button',
    '.content__description-text_display_none',
    '.content__button img',
    '.content__button p'
  )
  openUpContent(
    '.tech-top__button',
    '.tech-top',
    '.tech-top__button img',
    '.tech-top__button p'
  )
  openUpContent(
    '.tech-middle__button',
    '.tech-middle',
    '.tech-middle__button img',
    '.tech-middle__button p'
  )
  modalToggle('.header__list-item_burger', '.cross_menu', '.menu', '.content')
  modalToggle(
    '.menu-items__list-item_call',
    '.cross_call',
    '.modal_call',
    '.content'
  )
  modalToggle(
    '.menu-items__list-item_chat',
    '.cross_chat',
    '.modal_chat',
    '.content'
  )
  resizableSwiper('(max-width: 768px)', '.slider-1', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  })
  resizableSwiper('(max-width: 768px)', '.slider-2', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  })
  resizableSwiper('(max-width: 768px)', '.slider-3', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16
  })
  mask('[name="phone"]')
  checkTextInputs('[name="name"]')
  checkTextInputs('[name="message"]')
})
