import calcScroll from './calcScroll'

function modalToggle(
  openSelector,
  closeSelector,
  modalSelector,
  contentSelector
) {
  const openBtn = document.querySelectorAll(openSelector)
  const closeBtn = document.querySelector(closeSelector)
  const modal = document.querySelector(modalSelector)
  const content = document.querySelector(contentSelector)
  const modals = document.querySelectorAll('.modal')
  const modalsClose = document.querySelectorAll('.modal_close')
  const contentBlock = document.querySelector('.content__block')
  const footerBlock = document.querySelector('.footer')

  const csroll = calcScroll()

  function filterToggle(grayscale, blur, opacity, overflow, scroll) {
    contentBlock.style.filter = `grayscale(${grayscale}) blur(${blur}) opacity(${opacity})`
    footerBlock.style.filter = `grayscale(${grayscale}) blur(${blur}) opacity(${opacity})`
    document.body.style.overflow = overflow
    document.body.style.marginRight = `${scroll}px`
  }

  openBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopImmediatePropagation()
      if (window.innerWidth > 1120) {
        modalsClose.forEach((mod) => {
          mod.style.display = 'none'
        })
        modal.style.display = 'block'
      } else {
        modals.forEach((mod) => {
          mod.style.display = 'none'
        })
        modal.style.display = 'block'
      }
      filterToggle('80%', '5px', '0.5', 'hidden', csroll)
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    filterToggle('0', '0', '1', '', '0')
  })

  content.addEventListener('click', (e) => {
    e.stopImmediatePropagation()
    if (
      !e.target.closest('.modal') &&
      window.innerWidth > 767 &&
      window.innerWidth < 1120
    ) {
      modals.forEach((mod) => {
        mod.style.display = 'none'
        filterToggle('0', '0', '1', '', '0')
      })
    }
  })
}

export default modalToggle
