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

});

