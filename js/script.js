const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 75,
    loop: true,
    arialabel: "Следующий слайд",
    arialabel: "Предыдущий слайд",
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
       
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },  
    // навигация
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  