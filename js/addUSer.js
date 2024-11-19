function selectRole(index) {
  const buttons = document.querySelectorAll(".addUser__button");
  const slider = document.querySelector(".slider");

  buttons.forEach((btn) => btn.classList.remove("addUser__button--active"));

  buttons[index].classList.add("addUser__button--active");

  slider.style.left = `${index * 50}%`;
}
