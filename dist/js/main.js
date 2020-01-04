// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

// });

// document.addEventListener('keypress', (event) => {  
  
//   if (event.code == 'Escape'){
//     closeBtn.addEventListener('keypress', switchModal);
//   }
// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(window).scroll(function () {
    // Если отступ сверху больше 750px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 750) {
        $('.button--up').fadeIn();
    } else {
        $('.button--up').fadeOut();
    }
  });

/** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('.button--up').click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 900);
      return false;
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)

  new WOW().init();

  var target = $('.design__section-title');
    targetPos = target.offset().top;
    winHeight = $(window).height();
    scrollToElem = targetPos - winHeight;
    element =  document.querySelector('.design__section-title')
  $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();

    if(winScrollTop > scrollToElem){
      
      element.classList.add('animated', 'fadeInUp')
    }
  });

  // валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // одно строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правила-объект (блок правил)
      userEmail: {
        required: true,
        email: true
      }
    }, /* сообщения при выводе ошибки */
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
   }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // одно строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правила-объект (блок правил)
      userEmail: {
        required: true,
        email: true
      }
    }, /* сообщения при выводе ошибки */
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // одно строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правила-объект (блок правил)
      userEmail: {
        required: true,
        email: true
      }
    }, /* сообщения при выводе ошибки */
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2 букв",
        maxlength: "Имя не длиннее 15 букв"
      },
      userPhone: "Телефон обязателен",
    }
  });
  /* маска для телефона */
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});

  // $('#control-form').submit(function(e){
  //   e.preventDefault(); /* произвели отключение стандартного события отправки формы через php, теперь она не работает */
  //   $.ajax({
  //     type: "POST",
  //     url: "send.php",
  //     data: $(this).serialize(), /* слепливает все поля для data воедино в 1 строку */
  //     success: function (response) { /* в сдучае успеха делает то-то */
  //       console.log('Прибыли данные:' + response); /* получает response из echo в php */
  //       $('#control-form')[0].reset(); /* чистит поля при отправке формы */

  //       var 
  //         modalSmall = $('.modal--small'),
  //         closeSmallBtn = $('.modal--small__close');
  //       modalSmall.toggleClass('modal--small--visible');
  //       $(".modal__title").text(response);
  //       closeSmallBtn.on('click', function () {
  //         modalSmall.toggleClass('modal--small--visible');
  //       });
  //     },
  //     error: function(jqXHR, textStatus, errorThrown) {
  //       console.error(jqXHR + " " + textStatus);
  //     }
  //   });
  // });

  /* создание карты */
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
/*    ymaps.ready(init);
   function init(){
       // Создание карты.
       var myMap = new ymaps.Map("map", {
           // Координаты центра карты.
           // Порядок по умолчанию: «широта, долгота».
           // Чтобы не определять координаты центра карты вручную,
           // воспользуйтесь инструментом Определение координат.
           center: [55.76, 37.64],
           // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
           zoom: 7
       });
   } */

  /* создание карты с доп настройками */
  /* ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 17,
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, { */
            // Опции.
            // Необходимо указать данный тип макета.
            /* iconLayout: 'default#image', */
            // Своё изображение иконки метки.
            /* iconImageHref: 'img/location.png', */
            // Размеры метки.
            /* iconImageSize: [32, 32], */
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            /* iconImageOffset: [-5, -38],
        }); */

/*     myMap.geoObjects
        .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
  }); */

});


