$(document).ready(function () {
   $('.slider').slick(
      {
         //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
         //!в теге пишем <img data-lazy=""> вместо src=""

         //Стрелки
         arrows: false,
         //Точки
         dots: true,
         //Авто-высота
         adaptiveHeight: true,
         //К-во слайдов
         slidesToShow: 1,
         //К-во слайдов, что прокручивется за раз
         slidesToScroll: 1,
         //Время прокрутки
         speed: 1000,
         //Тип анимации
         easing: 'linear',
         //Бесконечность слайдера
         infinite: true,
         //Стартовый слайд
         initialSlide: 0,
         //Авто-проигравание
         autoplay: true,
         //Скорость авто-проигравание
         autoplaySpeed: 3000,
         //Остановка авто-проигравание
         pauseOnFocus: false,
         pauseOnHover: false,
         pauseOnDotsHover: false,
         //Управление свайпом на ПК
         draggable: false,
         //Управление свайпом на телефонах
         swipe: true,
         //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
         touchThreshold: 5,
         //Возможности тачскрина (Элементы слайдера не передвигаются при свайпе, но свайпаются)
         touchMove: true,
         //Возможность спамить переключениями слайда
         waitForAnimate: true,
         //Делает активный слайд центральным
         centerMode: false,
         //Автоматическая ширина картинок
         variableWidth: false,
         //К-вл рядов
         rows: 1,
         //К-вл слайдов в ряду
         slidesPerRow: 1,
         //Вертикальный слайдер (display: flex; наадо отключить, сладйу стоит задать высоту)
         vertical: false,
         //Вертикальный свайп
         verticalSwiping: false,
         //Слайд не листаеться, а плавно заменяется (только при slidesToShow: 1,)
         fade: false,
         //Связать слайдеры (указивать в двоих слайдерах их пару)
         //? asNavFor:".slider_second",
         //Брейк-поинты
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  //новые ностройки
               }
            },
            {
               breakpoint: 480,
               settings: {
                  //новые ностройки
               }
            }
         ],

      }
   );
});
$(document).ready(function () {
   $('.slider-2').slick(
      {
         //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
         //!в теге пишем <img data-lazy=""> вместо src=""

         //Стрелки
         arrows: true,
         //Точки
         dots: false,
         //Авто-высота
         adaptiveHeight: true,
         //К-во слайдов
         slidesToShow: 5,
         //К-во слайдов, что прокручивется за раз
         slidesToScroll: 1,
         //Время прокрутки
         speed: 1000,
         //Тип анимации
         easing: 'linear',
         //Бесконечность слайдера
         infinite: true,
         //Стартовый слайд
         initialSlide: 0,
         //Авто-проигравание
         autoplay: true,
         //Скорость авто-проигравание
         autoplaySpeed: 3000,
         //Остановка авто-проигравание
         pauseOnFocus: false,
         pauseOnHover: false,
         pauseOnDotsHover: false,
         //Управление свайпом на ПК
         draggable: false,
         //Управление свайпом на телефонах
         swipe: true,
         //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
         touchThreshold: 5,
         //Возможности тачскрина (Элементы слайдера не передвигаются при свайпе, но свайпаются)
         touchMove: true,
         //Возможность спамить переключениями слайда
         waitForAnimate: true,
         //Делает активный слайд центральным
         centerMode: false,
         //Автоматическая ширина картинок
         variableWidth: false,
         //К-вл рядов
         rows: 1,
         //К-вл слайдов в ряду
         slidesPerRow: 1,
         //Вертикальный слайдер (display: flex; наадо отключить, сладйу стоит задать высоту)
         vertical: false,
         //Вертикальный свайп
         verticalSwiping: false,
         //Слайд не листаеться, а плавно заменяется (только при slidesToShow: 1,)
         fade: false,
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  //К-во слайдов
                  slidesToShow: 3,
               }
            },
            {
               breakpoint: 480,
               settings: {
                  //К-во слайдов
                  slidesToShow: 2,
               }
            },
            {
               breakpoint: 425,
               settings: {
                  //К-во слайдов
                  slidesToShow: 1,
               }
            }
         ],
      }
   );
});
$(document).ready(function () {
   $('.slider-3').slick(
      {
         //!Для пошаговой загрузки изображений (когда пользователь меняет картинку, то она загружается, а не все сразу)
         //!в теге пишем <img data-lazy=""> вместо src=""

         //Стрелки
         arrows: false,
         //Авто-высота
         adaptiveHeight: true,
         //К-во слайдов
         slidesToShow: 1,
         //К-во слайдов, что прокручивется за раз
         slidesToScroll: 1,
         //Время прокрутки
         speed: 0,
         //Тип анимации
         easing: 'linear',
         //Бесконечность слайдера
         infinite: true,
         //Стартовый слайд
         initialSlide: 0,
         //Скорость авто-проигравание
         autoplaySpeed: 3000,
         //Управление свайпом на ПК
         draggable: false,
         //Управление свайпом на телефонах
         swipe: true,
         //Длина свайпа, для прокрутки (Чем меньше число, тем длинее свайп)
         touchThreshold: 5,
         //Возможности тачскрина (Элементы слайдера не передвигаются при свайпе, но свайпаются)
         touchMove: true,
         //Возможность спамить переключениями слайда
         waitForAnimate: false,
         fade: true,
         //К-вл рядов
         rows: 1,
         //К-вл слайдов в ряду
         slidesPerRow: 1,
         dots: true,
         customPaging: function (slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a><img src="' + thumb + '"></a>';
         },
      }
   );
});
