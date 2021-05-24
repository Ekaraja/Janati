let bigWindow = document.getElementById('bigWindow')
let bigResizeButton = document.getElementById('bigResizeButton')
let bigCloseButton = document.getElementById('bigCloseButton')

let mediumWindow = document.getElementById('mediumWindow')
let mediumResizeButton = document.getElementById('mediumResizeButton')
let mediumCloseButton = document.getElementById('mediumCloseButton')

let smallWindow = document.getElementById('smallWindow')
let smallResizeButton = document.getElementById('smallResizeButton')
let smallCloseButton = document.getElementById('smallCloseButton')


function closeBigWindow() {bigWindow.style.display = 'none'}
function closeMediumWindow() {mediumWindow.style.display = 'none'}
function closeSmallWindow() {smallWindow.style.display = 'none'}


bigCloseButton.addEventListener("click", closeBigWindow)
mediumCloseButton.addEventListener("click", closeMediumWindow)
smallCloseButton.addEventListener("click", closeSmallWindow)

allWindows = document.querySelectorAll('.window')


// RESIZING

const maxWindowSize = 'left:2vh;bottom:2vh; width: 97vw; height: 75vh; transition: 300ms ease-in-out, color 300ms ease-in-out;'

function resizeSmallWindow () {smallWindow.style = maxWindowSize}
function resizeMediumWindow () {mediumWindow.style = maxWindowSize}
function resizeBigWindow () {bigWindow.style = maxWindowSize}

bigResizeButton.addEventListener("click", resizeBigWindow)
mediumResizeButton.addEventListener("click", resizeMediumWindow)
smallResizeButton.addEventListener("click", resizeSmallWindow)



// BOUCLE QUI DONNE UNE BORDURE ROUGE A TOUTES LES FENETRES
// for (var i = 0; i < allWindows.length; i++) {
//     var currentWindow = allWindows[i];
//     currentWindow.style.border = 'red 10px solid';
// }

