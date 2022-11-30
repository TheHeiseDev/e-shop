// Slider param
new Swiper(".image-slider", {
  pagination: {
    el: ".swiper-pagination",

    clickable: true,
  },

  // Количетсво слайдов в контейнере
  slidesPerView: 1,
  // Отступ между слайдами
  spaceBetween: 0,
  //  Количество прокручиваемых слайдов
  slidesPerGroup: 1,

  // Настройка автопрокрутки
  autoplay: {
    delay: 3000,
    // Остановится ли прокрутка когда слайды закончатся?
    stopOnListSlide: true,
    // Откючить после ручного переключения
    disableOnInteraction: true,
  },
  // Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  // Уменьшение кол-ва слайдов при изменении размера экрана
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //   },
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 10,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  // },

  //
});
