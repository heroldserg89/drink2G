const priceSlider = document.querySelector('.form-filter__slider');
console.log(priceSlider);
noUiSlider.create(priceSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  }
});
