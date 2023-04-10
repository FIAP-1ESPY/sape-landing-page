const $floatButton = document.querySelector('.float-button')

document.addEventListener('scroll', () => {
  const viewportHeight = window.outerHeight

  if (window.scrollY >= viewportHeight) {
    $floatButton.classList.add('show')
  } else {
    $floatButton.classList.remove('show')
  }
})