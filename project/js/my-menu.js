
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header = document.querySelector('.header');
let header__list = document.querySelector('.header__list');
let height = 90;

let page = document.querySelector('.page');
let menu = document.querySelector('.header__menu');
header__burger.onclick = function () {

   menu.style.paddingBottom = height + "px";
   menu.style.top = height + "px";
   page.style.marginTop = height + "px";

   header__burger.classList.toggle('active');
   header_menu.classList.toggle('active');
   back.classList.toggle('lock');
}

let mediaQuery = window.matchMedia("(min-width: 768.1px)")
function handleTabletChange(e) {
   if (e.matches) {
      menu.style.paddingBottom = "0px";

      height = 90;
   }
   else height = 62;
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
   page.style.marginTop = height + "px";
   menu.style.top = height + "px";
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

const links = Array.from(header__list.children);

links.forEach((link) => {
   link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
   header__burger.classList.remove('active');
   header_menu.classList.remove('active');
   back.classList.remove('lock');
}

