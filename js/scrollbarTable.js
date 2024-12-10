document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".log");
  const content = document.querySelector(".tableC");
  const searchFilter = document.querySelectorAll(".search-filter");

  container.addEventListener("wheel", (event) => {
    const isInsideModal = Array.from(searchFilter).some((modal) => modal.contains(event.target));

    if (!isInsideModal) {
      event.preventDefault();

      const currentMarginLeft = parseFloat(window.getComputedStyle(content).marginLeft, 10);

      let rectContainer = container.getBoundingClientRect();
      let rectContent = content.getBoundingClientRect();

      let newMarginLeft = currentMarginLeft + parseInt(event.deltaY, 10);

      if (currentMarginLeft + parseInt(event.deltaY, 10) >= 0) {
        console.log("я в if");

        content.style.marginLeft = `0px`;

        window.scrollBy(0, event.deltaY);
      } else if (rectContent.right + parseInt(event.deltaY, 10) < rectContainer.right) {
        console.log("я в else if");

        newMarginLeft = rectContainer.right - rectContent.right + currentMarginLeft;
        content.style.marginLeft = `${newMarginLeft}px`;

        window.scrollBy(0, event.deltaY);
      } else {
        console.log("я в else");

        content.style.marginLeft = `${newMarginLeft}px`;
      }
    }
  });
});
