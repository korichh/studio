'use strict';

let burgerIcon = document.querySelector('.burger__icon');
let burgerNav = document.querySelector('.burger__nav');

if (burgerIcon && burgerNav) {
    burgerIcon.onclick = () => {
        document.body.classList.toggle('_lock');
        burgerIcon.classList.toggle('_active');
        burgerNav.classList.toggle('_active');
    }
}