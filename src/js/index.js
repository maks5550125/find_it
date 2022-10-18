//* HEADER

// Анимация input при < 650px

const $headerInput = document.querySelector('.header__input');
const $headerSubmit = document.querySelector('.header__submit');

function headerSubmitClickMore650(event) {
    if (!$headerSubmit.classList.contains('_active')) {
        event.preventDefault();

        $headerSubmit.classList.add('_active');
        $headerInput.classList.add('_active');
    } 
}

// Открытие burgerMenu
const $headerBurgerButton = document.querySelector('.header__burger-button');
const $headerBurgerMenu = document.querySelector('.header__burger-menu');


function activationHeaderBurger(event) {
    if (event.target.classList.contains('header__burger-button')) {
        $headerBurgerMenu.classList.toggle('_active');
    } else if (!event.target.closest('.header__burger-menu') && $headerBurgerMenu.classList.contains('_active')) {
        $headerBurgerMenu.classList.remove('_active')
    }
}

// Адоптив

const $headerLeftSide = document.querySelector('.header__left-side')
const $headerRightSide = document.querySelector('.header__right-side')
const $headerForm = $headerRightSide.querySelector('.header__form');
const $headerReg = $headerLeftSide.querySelector('.header__reg');
const $headerSign = $headerLeftSide.querySelector('.header__sign');


if (document.documentElement.clientWidth >= 650) {
    $headerSubmit.addEventListener('click', headerSubmitClickMore650);
}

headerAdoptive();
window.addEventListener('resize', headerAdoptive);

function headerAdoptive() {
    if (document.documentElement.clientWidth >= 650) {
        $headerSubmit.addEventListener('click', headerSubmitClickMore650);
        document.documentElement.removeEventListener('click', activationHeaderBurger);

        $headerLeftSide.append($headerReg);
        $headerLeftSide.append($headerSign);
        $headerRightSide.append($headerForm);

} else {    
        $headerSubmit.removeEventListener('click', headerSubmitClickMore650);
        document.documentElement.addEventListener('click', activationHeaderBurger);

        $headerBurgerMenu.append($headerForm);
        $headerBurgerMenu.append($headerReg);
        $headerBurgerMenu.append($headerSign);
    }
}