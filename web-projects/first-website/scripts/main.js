const myImage = document.querySelector('img')

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/fd2-logo.png') {
    myImage.setAttribute('src', 'images/fd2-logo-orange.png')
  } else {
    myImage.setAttribute('src', 'images/fd2-logo.png')
  }
})
