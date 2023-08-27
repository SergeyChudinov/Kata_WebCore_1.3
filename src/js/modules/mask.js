const mask = (selector) => {
  function createMask() {
    const matrix = '+7 (___) ___ __ __'
    let i = 0
    const def = matrix.replace(/\D/g, '')
    let val = this.value.replace(/\D/g, '')
    if (def.length >= val.length) {
      val = def
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a
    })
  }

  const inputs = document.querySelectorAll(selector)
  inputs.forEach((input) => {
    input.addEventListener('input', createMask)
    input.addEventListener('focus', createMask)
    input.addEventListener('blur', createMask)
  })
}

export default mask
