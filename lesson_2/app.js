function updateBackground(slide) {
  const slideImage = slide.style.backgroundImage;
  document.body.style.backgroundImage = slideImage;
}

function startUp() {
  const firstSlide = document.querySelector(".slider-container .slide");
  firstSlide.classList.add("active");

  updateBackground(firstSlide);

  const firstNav = document.querySelector(".nav .nav-item");
  firstNav.classList.add("active");
}

startUp();

const backBtn = document.querySelector("#arrow-back");
const nextBtn = document.querySelector("#arrow-next");

nextBtn.onclick = () => {
  debugger; // breakpoint;

  const activeSlide = document.querySelector(".slider-container .slide.active");
  activeSlide.classList.remove("active");

  let nextSlide = activeSlide.nextElementSibling;
  if (nextSlide === null) {
    const firstSlide = activeSlide.parentElement.firstElementChild;
    nextSlide = firstSlide;
  }
  nextSlide.classList.add("active");

  updateBackground(nextSlide);

  const activeNav = document.querySelector(".nav .nav-item.active");
  activeNav.classList.remove("active");

  let nextNav = activeNav.nextElementSibling;
  if (nextNav === null) {
    const firstNav = activeNav.parentElement.firstElementChild;
    nextNav = firstNav;
  }
  nextNav.classList.add("active");
};

backBtn.onclick = () => {
  const activeSlide = document.querySelector(".slider-container .slide.active");
  activeSlide.classList.remove("active");

  let prevSlide = activeSlide.previousElementSibling;
  if (prevSlide === null) {
    const lastSlide = activeSlide.parentElement.lastElementChild;
    prevSlide = lastSlide;
  }
  prevSlide.classList.add("active");

  updateBackground(prevSlide);

  const activeNav = document.querySelector(".nav .nav-item.active");
  activeNav.classList.remove("active");

  let prevNav = activeNav.previousElementSibling;
  if (prevNav === null) {
    const lastNav = activeNav.parentElement.lastElementChild;
    prevNav = lastNav;
  }
  prevNav.classList.add("active");
};

// Рефакторинг - Refactoring
// DRY - Don't Repeat Yourself
// Debugging - отладка
