'use strict';

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

// Header
let header = document.querySelector('.header');

if (header) {
    let headerInner = document.querySelector('.header__inner');

    window.addEventListener('scroll', headerAnim);

    headerAnim();

    function headerAnim() {
        if (scrollY > 40) {
            headerInner.style.minHeight = '60px';
            header.style.boxShadow = '0px 1px 10px rgba(0,0,0,0.2)';
        } else {
            headerInner.style.minHeight = '';
            header.style.boxShadow = '';
        }
    }
}

// Loading
window.onload = () => {
    let loading = document.querySelector('.loading');

    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.style.display = 'none', 300);
    }
}

// Go to
let navItems = document.querySelectorAll('.header__nav-item[data-goto]');


if (navItems.length > 0) {
    navItems.forEach(navItem => {
        navItem.onclick = (e) => {
            try {

                const navItem = e.target.closest('.header__nav-item');
                if (navItem.dataset.goto && document.querySelector(navItem.dataset.goto)) {
                    const gotoBlock = document.querySelector(navItem.dataset.goto);
                    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + 2 + scrollY - header.offsetHeight;

                    if (burgerIcon.classList.contains('_active')) {
                        burgerNav.classList.remove('_active');
                        burgerIcon.classList.remove('_active');
                        document.body.classList.remove('_lock');
                    }

                    window.scrollTo({
                        top: gotoBlockValue,
                        behavior: 'smooth'
                    })
                }

            } catch (e) {
                console.log(e.message);
            }

            return false;
        }
    })
}

// Animation
window.addEventListener('scroll', blocksAnim);

function blocksAnim() {
    let animLeft = document.querySelectorAll('.animLeft');
    let animRight = document.querySelectorAll('.animRight');

    let leftRightBlocks = [];
    leftRightBlocks.push(...animLeft, ...animRight);

    let heightForLeftRight = document.body.clientHeight / 1.8;

    for (let leftRightBlock of leftRightBlocks) {
        if (leftRightBlock.getBoundingClientRect().top <= heightForLeftRight) {
            leftRightBlock.classList.add('_anim');
        } else {
            if (leftRightBlock.classList.contains('_anim')) {
                leftRightBlock.classList.remove('_anim');
            }
        }
    }

    let animBottom = document.querySelectorAll('.animBottom');

    let heightForBottom = document.body.clientHeight / 1.3;

    for (let bottomBlock of animBottom) {
        if (bottomBlock.getBoundingClientRect().top <= heightForBottom) {
            bottomBlock.classList.add('_anim');
        } else {
            if (bottomBlock.classList.contains('_anim')) {
                bottomBlock.classList.remove('_anim');
            }
        }
    }
}

blocksAnim();