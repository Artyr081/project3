var swiper = new Swiper('.swiper', {
        
  loop: true,

  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  slidesPerView: 1.27,
});

function checkScreenWidth() {
    if (window.innerWidth > 321) {
        swiper.destroy();
    } else {
       swiper = new Swiper('.swiper', {
        
        loop: true,
    
        spaceBetween: 30,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
       
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        
        slidesPerView: 1.27,
      });
    }
}
window.addEventListener('resize', checkScreenWidth);
checkScreenWidth();


let button = document.querySelector('.brands-button');
let buttonBrend = document.querySelector('.brands-block__swiper');
let span = document.querySelector('.brands-button__text');

let spanText = 'Показать все';
span.textContent = spanText;

button.addEventListener('click', function() {
  if (spanText === 'Показать все') {
      spanText = 'Скрыть';
      
      span.classList.add('brands-button__text_open');
      buttonBrend.classList.add('swiper_open');
  } else {
      spanText = 'Показать все';
      buttonBrend.classList.remove('swiper_open')
      span.classList.remove('brands-button__text_open');
};

  span.textContent = spanText;
 
});


