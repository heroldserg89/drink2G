const sliderWrapper = document.querySelector('.slider__list');
const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');
const paginationContainer = document.querySelector('.slider__dots');

let currentIndex = 0;
const slideCount = slides.length;

// Создание пагинации
for (let i = 0; i < slideCount; i++) {
  const dot = document.createElement('button');
  const dotChildElement = document.createElement('span');
  dotChildElement.classList.add('slider__dot-text', 'visually-hidden');
  dotChildElement.innerHTML = `Слайд ${i + 1}`;
  dot.appendChild(dotChildElement);
  dot.classList.add('slider__dot');
  dot.type = 'button';
  dot.title = `Слайд ${i + 1}`;
  dot.dataset.index = i;
  paginationContainer.appendChild(dot);
}

const paginationDots = document.querySelectorAll('.slider__dot');

// Функция для обновления состояния слайдера
const updateSlider = () => {
  // Перемещение слайдов
  sliderWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;

  // Блокировка кнопок
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === slideCount - 1;

  // Обновление пагинации
  paginationDots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('slider__dot--active');
    } else {
      dot.classList.remove('slider__dot--active');
    }
  });
};

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
    updateSlider();
  }
});

// Обработчики событий для пагинации
paginationContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('slider__dot')) {
    currentIndex = parseInt(evt.target.dataset.index, 10);
    updateSlider();
  }
});

// Инициализация слайдера при загрузке страницы
updateSlider();
