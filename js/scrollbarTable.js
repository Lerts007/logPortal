const container = document.querySelector(".log");
const modalWindowSearch = document.querySelectorAll(".modalWindowSearch");

container.addEventListener("wheel", (event) => {
  let isInsideModal = false;

  modalWindowSearch.forEach((modal) => {
    if (modal.contains(event.target)) {
      isInsideModal = true;
    }
  });

  if (isInsideModal) {
    if (event.deltaX !== 0) {
      event.preventDefault();
      modalWindowSearch.forEach((modal) => {
        modal.scrollTop += event.deltaX;
      });
    }
  } else {
    if (event.deltaY !== 0) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    }
  }
});
