function openUpContent(btnSelector, containerSelector, img, text) {
  const btn = document.querySelector(btnSelector)
  const container = document.querySelector(containerSelector)
  const buttonImg = document.querySelector(img)
  const buttonText = document.querySelector(text)

  let sliderIsOpened = false

  btn.addEventListener('click', () => {
    if (sliderIsOpened) {
      if (
        containerSelector === '.tech-top' ||
        containerSelector === '.tech-middle'
      ) {
        container.classList.remove('show-more')
      } else {
        container.style.display = 'none'
      }
    } else {
      if (
        containerSelector === '.tech-top' ||
        containerSelector === '.tech-middle'
      ) {
        container.classList.add('show-more')
      } else {
        container.style.display = 'block'
      }
    }
    buttonImg.style.transform = sliderIsOpened
      ? 'rotate(0deg)'
      : 'rotate(180deg)'
    buttonText.textContent = sliderIsOpened ? 'Показать все' : 'Скрыть'
    sliderIsOpened = !sliderIsOpened
  })
}

export default openUpContent
