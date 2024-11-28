function selectRole(index) {
  const buttons = document.querySelectorAll(".btn-slider__btn");
  const slider = document.querySelector(".btn-slider__slider");

  buttons.forEach((btn) => btn.classList.remove("btn-slider__btn--active"));

  buttons[index].classList.add("btn-slider__btn--active");

  if (index) {
    slider.style.left = `calc(${index * 50}% )`;
  } else {
    slider.style.left = `2px`;
  }
}
