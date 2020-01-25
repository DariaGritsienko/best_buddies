let slideIndex = 1;

    /* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides(slideIndex += 1);
}

    /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides(slideIndex -= 1);
}

    /* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

    /* Основная функция слайдера */
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slider__image");
  const dots = document.getElementsByClassName("slider__button");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

showSlides(slideIndex);
