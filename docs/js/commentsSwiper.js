'use strict';

let commentsSwiper = document.querySelector('.comments__swiper');
let paginationEl = commentsSwiper.querySelector('.swiper-pagination');

const swiper = new Swiper(commentsSwiper, {
    loop: true,

    autoHeight: true,
    grabCursor: true,

    pagination: {
        el: paginationEl,
        clickable: true,
    }
});