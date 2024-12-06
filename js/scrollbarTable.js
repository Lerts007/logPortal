document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".log");
  const content = document.querySelector(".tableC");
  const searchFilter = document.querySelectorAll(".search-filter");

  let scrollPosition = 0;

  container.addEventListener(
    "wheel",
    (event) => {
      scrollPosition = window.pageYOffset;

      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${scrollPosition}px;
        width: 100vw;
      `;

      const isInsideModal = Array.from(searchFilter).some((modal) => modal.contains(event.target));

      if (!isInsideModal) {
        event.preventDefault();

        const currentMarginLeft = parseFloat(window.getComputedStyle(content).marginLeft, 10);

        let rectContainer = container.getBoundingClientRect();
        let rectContent = content.getBoundingClientRect();

        let newMarginLeft = currentMarginLeft + parseInt(event.deltaY, 10);

        if (currentMarginLeft + parseInt(event.deltaY, 10) >= 0) {
          content.style.marginLeft = `0px`;
        } else if (rectContent.right + parseInt(event.deltaY, 10) < rectContainer.right) {
          newMarginLeft = rectContainer.right - rectContent.right + currentMarginLeft;

          content.style.marginLeft = `${newMarginLeft}px`;
        } else {
          content.style.marginLeft = `${newMarginLeft}px`;
        }
      }

      requestAnimationFrame(() => {
        document.body.style.cssText = "";
        window.scrollTo(0, scrollPosition);
      });
    },
    { passive: false }
  );
});
