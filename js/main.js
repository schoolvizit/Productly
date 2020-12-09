$(function () {
  $('.slider').slick({
    arrows: false,
    // fade:true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true
    responsive: [
      {
        breakpoint: 1088,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 548,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


});

// burger js
const burger = document.querySelector('.burger'),
  buttonClose = document.querySelector('.burger span'),
  menu = document.querySelector('.menu'),
  links = document.querySelectorAll('a'),

  // блок перекрывающий контент body
  overlay = document.querySelector('.burger__overlay');



burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  buttonClose.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('lock');
});



overlay.addEventListener('click', () => {
  burger.classList.remove('active');
  buttonClose.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('lock');
});


links.forEach(function (item) {
  item.addEventListener('click', () => {
    burger.classList.remove('active');
    buttonClose.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
});