function checkScreenWidth() {
    if (window.innerWidth > 767) {
        swiper.destroy();
    } else {
      var swiper = new Swiper('.swiper', {
        
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
      
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
  
      span.classList.toggle('brands-button__text_open');
      buttonBrend.classList.add('swiper_open');
  } else {
      spanText = 'Показать все';

      buttonBrend.classList.remove('swiper_open');
      span.classList.toggle('brands-button__text_open');
};

  span.textContent = spanText;
 
});


