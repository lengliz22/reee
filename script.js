const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no')

let buttonYesFontSize = 2;
let buttonNoFontSize = 2;

buttonNo.addEventListener('click' , doYesMore);
buttonYes.addEventListener('click' , buttonYesPushed);

function doYesMore () {
    buttonYesFontSize = buttonYesFontSize + 0.3   ;
    buttonYes.style.fontSize = buttonYesFontSize + 'em';
    buttonNoFontSize = buttonNoFontSize - 0.2;
    buttonNo.style.fontSize = buttonNoFontSize + 'em';
}

function buttonYesPushed() {
    location.href = './page2.html';
}