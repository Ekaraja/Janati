let bigWindow = document.getElementById('bigWindow')
let bigCloseButton = document.getElementById('bigCloseButton')

let mediumWindow = document.getElementById('mediumWindow')
let mediumCloseButton = document.getElementById('mediumCloseButton')

let smallWindow = document.getElementById('smallWindow')
let smallCloseButton = document.getElementById('smallCloseButton')


function closeBigWindow() {bigWindow.style.display = 'none'}
function closeMediumWindow() {mediumWindow.style.display = 'none'}
function closeSmallWindow() {smallWindow.style.display = 'none'}


bigCloseButton.addEventListener("click", closeBigWindow)
mediumCloseButton.addEventListener("click", closeMediumWindow)
smallCloseButton.addEventListener("click", closeSmallWindow)