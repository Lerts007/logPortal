document.querySelectorAll(".lineTable").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modalWindowLog").classList.toggle("modalWindowLog--disabled");
    document.querySelector("body").classList.toggle("noScroll");
  });
});

document.querySelector(".closeModalWindow").addEventListener("click", () => {
  event.stopPropagation();
  document.querySelector(".modalWindowLog").classList.add("modalWindowLog--disabled");
  document.querySelector("body").classList.remove("noScroll");
});

document.querySelector(".modalWindowLog").addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.add("modalWindowLog--disabled");
    document.querySelector("body").classList.remove("noScroll");
  }
});
