const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
  let swiper

  breakpoint = window.matchMedia(breakpoint)

  const enableSwiper = function (className, settings) {
    swiper = new Swiper(className, settings)
  }

  const checker = function () {
    if (breakpoint.matches) {
      return enableSwiper(swiperClass, swiperSettings)
    }
    if (swiper !== undefined) swiper.destroy(true, true)
    return
  }

  breakpoint.addEventListener('change', checker)
  checker()
}

export default resizableSwiper
