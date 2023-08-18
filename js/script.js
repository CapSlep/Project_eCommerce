//header variables
let header = document.querySelector(".js-header");
let intro = document.querySelector(".js-intro");
//burger nav variables
const burgerToggle = document.querySelector("#burgerToggle");
const nav = document.querySelectorAll(".js-nav");

//========= Header =====================

let scrollPos = window.scrollY;
let introHeight = intro.clientHeight;
const Checker = function (onResize) {
    if (onResize) {
        introHeight = intro.clientHeight;
    }
    scrollPos = window.scrollY;

    if (scrollPos >= introHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed')
    }
}

window.addEventListener('resize', Checker(true));

window.addEventListener('scroll', Checker);

//=========================================

//========= Swiper =====================
var swiper = new Swiper(".inspirations__swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  lazyLoading: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    690:{
      slidesPerView:2,
    }
  }
});

//=========================================

//========= Burger nav =====================

burgerToggle.addEventListener('click', function (event) {
  event.preventDefault();
  nav.forEach((element) => {
    element.classList.toggle('show');
  });
});

//=========================================