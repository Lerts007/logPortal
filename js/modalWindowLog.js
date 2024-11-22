let scroll = 0;

document.querySelectorAll(".lineTable").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modalWindowLog").classList.toggle("modalWindowLog--disabled");
    document.querySelector("body").classList.toggle("noScroll");

    scroll = window.pageYOffset;

    document.querySelector(".modalWindowLog").style.position = `fixed`;
    document.body.style.position = `fixed`;
    document.body.style.top = `-${scroll}px`;
    // document.querySelector(".modalWindowLog").style.top = `${scroll}px`;
  });
});

document.querySelector(".closeModalWindow").addEventListener("click", (event) => {
  event.stopPropagation();
  document.querySelector(".modalWindowLog").classList.add("modalWindowLog--disabled");
  document.querySelector("body").classList.remove("noScroll");
  close();
});

document.querySelector(".modalWindowLog").addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.add("modalWindowLog--disabled");
    document.querySelector("body").classList.remove("noScroll");
    close();
  }
});
function close() {
  document.body.style.position = `relative`;
  document.body.style.top = `0px`;
  window.scrollTo(0, scroll);
  // document.querySelector(".modalWindowLog").style.top = `0px`;
}
