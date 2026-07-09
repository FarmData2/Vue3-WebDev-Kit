const myImage = document.querySelector('img')

myImage.addEventListener('click', () => {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/fd2-logo.png') {
    myImage.setAttribute('src', 'images/fd2-logo-orange.png')
  } else {
    myImage.setAttribute('src', 'images/fd2-logo.png')
  }
})

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
  const myName = prompt('Please enter your name.')
  localStorage.setItem('name', myName)
  myHeading.textContent = `FarmData2 is cool, ${myName}`
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  const storedName = localStorage.getItem('name')
  myHeading.textContent = `FarmData2 is cool, ${storedName}`
}

myButton.addEventListener('click', () => {
  setUserName()
})
