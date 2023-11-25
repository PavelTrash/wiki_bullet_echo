let a = 57;
console.log (a);
// let title=document.querySelector(".home__title")
// title.textContent = "Привет из JS!"


// let burger = document.querySelector('.burger-menu')
// let nav = document.querySelector('.main.nav')
// burger.addEventListener('click' ,function(){
//     burger.classList.toggle('active')
//     nav.classList.toggle('active')
// })
$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
//   $('.carousel').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
                  