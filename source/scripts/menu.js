const burger = document.querySelector('.burger');
const headerNavBlock = document.querySelector('.header__nav-block');

burger.addEventListener('click', () => {
  headerNavBlock.classList.toggle('header__nav-block--open');
  burger.classList.toggle('burger--active');
});

