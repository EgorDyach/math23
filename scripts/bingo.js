document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector(".container")
  const swiperhero = new Swiper('.hero__swiper', {
    // Default parameters
    loop: true,
    effect: 'fade',
    speed: 3000,
    autoplay: {
      delay: 3000
    }

  });

  $(function () {
    $("#accordion").accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false

    });
  });

  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__nav');
  let menulinks = menu.querySelectorAll('.header__nav-link');
  let menugrades = menu.querySelectorAll('.header__link-burger');

  burger.addEventListener('click',

    function () {

      burger.classList.toggle('header__burger-active');

      menu.classList.toggle('header__nav-active');

      document.body.classList.toggle('stop-scroll');
    })

  menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

      burger.classList.remove('header__burger-active');

      menu.classList.remove('header__nav-active');

      document.body.classList.remove('stop-scroll');

    })
  });

  menugrades.forEach(function (el) {
    el.addEventListener('click', function () {

      burger.classList.remove('header__burger-active');

      menu.classList.remove('header__nav-active');

      document.body.classList.remove('stop-scroll');

    })
  });

  var gradesStart = document.querySelectorAll('.grades__theme-link');
  gradesStart.forEach(function (el) {
    el.addEventListener('click', function () {
      var startId = this.id;
      localStorage.setItem('class', JSON.stringify(startId)); 
    })
  })
})

