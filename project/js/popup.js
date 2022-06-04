let headerBasket = document.querySelector('.header__basket');
let popupClose = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
headerBasket.onclick = function () {
   back.classList.add('lock');
   popup.classList.add('active');
}
popupClose.onclick = function () {
   back.classList.remove('lock');
   popup.classList.remove('active');
}
document.querySelector(".popup__tel").addEventListener("keypress", function (evt) {
   if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
   }
});