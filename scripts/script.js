const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const images = [
  'images/ice-cream-photo-1.png',
  'images/ice-cream-photo-2.png',
  'images/ice-cream-photo-3.png'
];
const slideImages = [
  ['images/ice-cream-photo-2_1.png', 'images/ice-cream-photo-3_1.png'],
  ['images/ice-cream-photo-1_1.png', 'images/ice-cream-photo-2_1.png'],
  ['images/ice-cream-photo-3_1.png', 'images/ice-cream-photo-1_1.png']
];
let currentIndex = 0;
const sliderImage = document.querySelector('.slider-image');

function showImage(direction) {
  currentIndex = direction === 'prev' ? (currentIndex > 0 ? currentIndex - 1 : images.length - 1) : (currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  sliderImage.src = images[currentIndex];

  // Изменение изображения внутри текущего слайда
  const currentSlideImages = slideImages[currentIndex];
  const slideImageOne = document.querySelector('.slide-image-1');
  const slideImageTwo = document.querySelector('.slide-image-2');

  if (slideImageOne && slideImageTwo) {
    slideImageOne.src = currentSlideImages[0];
    slideImageTwo.src = currentSlideImages[1];
  }
}


const paginationItems = document.querySelectorAll('.pagination-promo-item');

// Функция переключения изображений и обновления пагинации
function showImage(direction) {
  if (direction === 'prev') {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  } else if (direction === 'next') {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  }
  sliderImage.src = images[currentIndex];

  // Удаление класса active-pagination со всех элементов
  paginationItems.forEach((item) => {
    item.classList.remove('active-pagination');
  });

  // Добавление класса active-pagination к соответствующему элементу li
  paginationItems[currentIndex].classList.add('active-pagination');
}


// Назначение обработчика событий для кнопок prev и next
prevButton.addEventListener('click', () => {
  showImage('prev');
});

nextButton.addEventListener('click', () => {
  showImage('next');
});


// Назначение обработчика событий для элементов li пагинации
paginationItems.forEach((item, index) => {
  // Создание обработчика событий с локальной переменной currentIndex
  const currentIndex = index;
  item.addEventListener('click', () => {
    sliderImage.src = images[currentIndex];

    // Удаление класса active-pagination со всех элементов
    paginationItems.forEach((item) => {
      item.classList.remove('active-pagination');
    });

    // Добавление класса active-pagination к элементу li
    item.classList.add('active-pagination');
  });
});


// // Изменения цвета фона body при смене слайдов
// const colors = ['#feafc3;', '#69a9ff;', '#fcc850']; // список цветов для смены
