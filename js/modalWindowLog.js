let scroll = 0;

document.querySelectorAll(".table__line").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-window-log").classList.toggle("modal-window-log--disabled");
    document.querySelector("body").classList.toggle("noScroll");

    scroll = window.pageYOffset;

    document.querySelector(".modal-window-log").style.position = `fixed`;
    document.body.style.position = `fixed`;
    document.body.style.top = `-${scroll}px`;
    // document.querySelector(".modalWindowLog").style.top = `${scroll}px`;
  });
});

document.querySelector(".modal-window-log__close").addEventListener("click", (event) => {
  event.stopPropagation();
  document.querySelector(".modal-window-log").classList.add("modal-window-log--disabled");
  document.querySelector("body").classList.remove("noScroll");
  close();
});

document.querySelector(".modal-window-log").addEventListener("click", function (event) {
  if (event.target === this) {
    this.classList.add("modal-window-log--disabled");
    document.querySelector("body").classList.remove("noScroll");
    close();
  }
});
function close() {
  document.body.style.position = `relative`;
  document.body.style.top = `0px`;
  window.scrollTo(0, scroll);
}
