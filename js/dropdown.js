// dropdown
document.querySelectorAll(".dropdown__toggle").forEach((el) => {
  el.addEventListener("click", function () {
    el.parentNode.classList.toggle("dropdown--open");
  });

  el.closest(".dropdown")
    .querySelectorAll(".dropdown__item")
    .forEach((item) => {
      item.addEventListener("click", function (event) {
        const selectedText = item.textContent;

        if (el.closest(".dropdown").querySelector(".dropdown__toggle-select")) {
          el
            .closest(".dropdown")
            .querySelector(".dropdown__toggle-select").innerHTML = `${selectedText}`;
        } else {
          el
            .closest(".dropdown")
            .querySelector(".dropdown__toggle-title").innerHTML = `${selectedText}`;
        }

        el.parentNode.classList.remove("dropdown--open");
      });
    });

  document.addEventListener("click", function (event) {
    const dropdown = el.parentNode;

    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("dropdown--open");
    }
  });
});

document.querySelector(".dropdown__icon-filter").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.querySelector(".dropdown--time-chart").addEventListener("click", function (event) {
  event.stopPropagation();
});
