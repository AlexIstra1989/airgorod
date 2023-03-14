//Burger
$('.header__btn').on('click', function() {
 $('.menu').toggleClass('menu_active'),
 $('.header__btn').toggleClass('header__btn_active');
});

//Sticky header
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) { /* если страница прокручена хотя бы на 1 пиксель */
    header.classList.add('scrolled'); /* добавляем класс, задающий новый фон */
  } else {
    header.classList.remove('scrolled'); /* удаляем класс, возвращающий прозрачный фон */
  }
});