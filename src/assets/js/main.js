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

//Slider 
new Swiper ('.reviews__slider', {
 slidesPerView: 3.5,
 autoHeight: true,
 spaceBetween: 30,
 loop: true,
 //initialSlide: 1,

 
 navigation: {
  prevEl: '.swiper-button-prev',
  nextEl: '.swiper-button-next',
 },

 // Брейкпоинты
		
			breakpoints: {
    320: {
					slidesPerView: 1,
					spaceBetween: 10,
					autoHeight: true,
				},
				490: {
					slidesPerView: 2,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2.4,
					spaceBetween: 20,
				},
				991: {
					slidesPerView: 3.5,
					spaceBetween: 30,
				},
			},
			
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
   const animStart = 6;

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

//popup
const openButton = document.getElementById('openPopup');
const closeButton = document.getElementById('closePopup');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const form = document.getElementById('popupForm');
const modal = document.getElementById('modal');
const okButton = document.getElementById('okBtn');

// Функция открытия попапа
function openPopup() {
 overlay.style.display = 'block';
 popup.style.display = 'block';
}

// Функция закрытия попапа
function closePopup() {
 overlay.style.display = 'none';
 popup.style.display = 'none';
}

// Функция открытия модального окна
function openModal() {
 overlay.style.display = 'block';
 modal.style.display = 'block';
 }
 
 // Функция закрытия модального окна
 function closeModal() {
  overlay.style.display = 'none';
  modal.style.display = 'none';
 }

// Назначаем обработчики событий на кнопки
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', function(event) {
 event.preventDefault();
 closePopup();
 openModal();
 });
 okButton.addEventListener('click', closeModal);
