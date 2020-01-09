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
  //Валидация формы
  function validateForm(form){
    $(form).validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        policyCheckbox: "required",
        userName: {
          required: true,
          minlength: 2,
          maxlength: 10
        },
        userPhone: "required",
        userQuestion: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      errorElement: "div",
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 10 букв"
        },
        policyCheckbox: "Подтвердите согласие на обработку данных",
        userPhone: "Телефон обязателен",
        userQuestion: {
          required: "Вопрос обязателен",
          minlength: "Вопрос слишком короткий",
          maxlength: "Слишком длинный вопрос"
        },
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате name@domain.com"
        }
      },
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
            return element.next('label').append(error);
        }
        error.insertAfter($(element));
      },
    });
  }
  validateForm('.modal__form');
  validateForm('.control__form');
  validateForm('.footer__form');
  /* маска для телефона */
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
//   $('.modal__form').validate({
//     errorClass: "invalid",
//     errorElement: "div",
//     rules: {
//       // одно строчное правило
//       policyCheckbox: "required",
//       userName: {
//         required: true,
//         minlength: 2,
//         maxlength: 15
//       },
//       userPhone: "required",
//       // правила-объект (блок правил)
//       userEmail: {
//         required: true,
//         email: true
//       },
// /*       policyCheckbox: {
//         required: true,
//       }, */
//     }, /* сообщения при выводе ошибки */
//     messages: {
//       userName: {
//         required: "Имя обязательно",
//         minlength: "Имя не короче 2 букв",
//         maxlength: "Имя не длиннее 15 букв"
//       },
//       userPhone: "Телефон обязателен",
//       userEmail: {
//         required: "Заполните поле",
//         email: "Введите корректный email"
//       }
//    }
//   });

//   $('.footer__form').validate({
//     errorClass: "invalid",
//     errorElement: "div",
//     rules: {
//       // одно строчное правило
//       userName: {
//         required: true,
//         minlength: 2,
//         maxlength: 15
//       },
//       userPhone: "required",
//       // правила-объект (блок правил)
//       userEmail: {
//         required: true,
//         email: true
//       }
//     }, /* сообщения при выводе ошибки */
//     messages: {
//       userName: {
//         required: "Имя обязательно",
//         minlength: "Имя не короче 2 букв",
//         maxlength: "Имя не длиннее 15 букв"
//       },
//       userPhone: "Телефон обязателен",
//     }
//   });

//   $('.control__form').validate({
//     errorClass: "invalid",
//     errorElement: "div",
//     rules: {
//       // одно строчное правило
//       policyCheckbox: "required",
//       userName: {
//         required: true,
//         minlength: 2,
//         maxlength: 15
//       },
//       userPhone: "required",
//       // правила-объект (блок правил)
//       userEmail: {
//         required: true,
//         email: true
//       }
//     }, /* сообщения при выводе ошибки */
//     messages: {
//       policyCheckbox: "Подтвердите согланисе на обработку данных",
//       userName: {
//         required: "Имя обязательно",
//         minlength: "Имя не короче 2 букв",
//         maxlength: "Имя не длиннее 15 букв"
//       },
//       userPhone: "Телефон обязателен",
//     }
//   });
  

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

  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'MZqtJ1IrRNI',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }
  
  var isAddedMap = false;

    $(window).scroll(function() {
        var el = $('.map');
        if ($(this).scrollTop() > el.offset().top - 800) {
            if(isAddedMap) return;
            isAddedMap = true;
            var script = document.createElement('script');
            script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6e1b29bfb831e6868ca0460087b9bd7b138ea93171c356178daa1ba8f18be9dd&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=false";
            el.append(script);
        };
    });


  //   $(function(){
  //     var inp = $('input[name="policyCheckbox"]');
  //     inp.on('click', function(){
  //         var disable = true;
  //         inp.each(function(id, el){
  //             if(el.checked) disable = false;
  //         });
  //         $('button[class="modal__button"]').attr('disabled', disable ? true : false);
  //     });
  // });
    $('.policy__checkbox').change(function(){
      
      if ($('.policy-checkbox').is(':checked')){
        $('.modal__button').removeAttr('disabled');
      }

    });
});


