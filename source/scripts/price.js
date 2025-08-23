const priceSlider = document.querySelector('.form-filter__slider');
const inputMin = document.querySelector('[name="min-price"]');
const inputMax = document.querySelector('[name="max-price"]');
noUiSlider.create(priceSlider, {
  start: [0, 900],
  connect: true,
  range: {
    'min': 0,
    'max': 1000
  },
  step: 1,
  cssPrefix: 'no-ui-'
});

priceSlider.noUiSlider.on('update', (values, handle) => {

  const value = values[handle];
  if (handle) {
    inputMax.value = Math.round(value);
  } else {
    inputMin.value = Math.round(value);
  }
});

inputMin.addEventListener('input', () => {
  priceSlider.noUiSlider.set([inputMin.value, null]);
});

inputMax.addEventListener('input', () => {
  priceSlider.noUiSlider.set([null, inputMax.value]);
});
