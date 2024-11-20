document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".log");
  const content = document.querySelector(".log__table");
  const modalWindowSearch = document.querySelectorAll(".modalWindowSearch");

  container.addEventListener("wheel", (event) => {
    let isInsideModal = false;

    modalWindowSearch.forEach((modal) => {
      if (modal.contains(event.target)) {
        isInsideModal = true;
      }
    });

    if (!isInsideModal) {
      // Получаем текущую позицию marginLeft
      const currentMarginLeft = parseInt(window.getComputedStyle(content).marginLeft, 10);

      let rectContainer = container.getBoundingClientRect();
      let rectContent = content.getBoundingClientRect();

      let newMarginLeft = currentMarginLeft + parseInt(event.deltaY, 10);

      if (currentMarginLeft + parseInt(event.deltaY, 10) >= 0) {
        content.style.marginLeft = `0px`;
        console.log("asd");
      }
      //
      else if (rectContent.right + parseInt(event.deltaY, 10) < rectContainer.right) {
        newMarginLeft = rectContainer.right - rectContent.right + currentMarginLeft;
        content.style.marginLeft = `${newMarginLeft}px`;
      }
      //
      else {
        content.style.marginLeft = `${newMarginLeft}px`;
      }
    }
  });
});
