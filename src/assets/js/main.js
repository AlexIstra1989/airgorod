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

//Анимация
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
 window.addEventListener('scroll', animOnScroll);
 function animOnScroll() {
  for (let index = 0; index < animItems.length; index++) {
   const animItem = animItems[index];
   const animItemHeight = animItem.offsetHeight;
   const animItemOffset = offset(animItem).top;
   const animStart = 4;

   let animItemPoint = window.innerHeight - animItemHeight / animStart;
   if (animItemHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
   }

   if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
    animItem.classList.add('_active');
   } else {
    if (!animItem.classList.contains('_anim-no-hide')) {
     animItem.classList.remove('_active');
    }
   }
  }
 }
 function offset(el) {
  const rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
 }

 setTimeout (() => {
  animOnScroll();
 }, 400);
 
};