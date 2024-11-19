document.querySelectorAll(".icon-search").forEach(function (item) {
  item.addEventListener("click", function () {
    const thElement = item.closest("th");

    const modalWindowSearch = thElement.querySelector(".modalWindowSearch");

    modalWindowSearch.classList.toggle("modalWindowSearch--disabled");
  });
});

document.addEventListener("click", function (event) {
  document.querySelectorAll(".modalWindowSearch").forEach(function (modal) {
    if (!modal.contains(event.target) && !event.target.closest(".icon-search")) {
      modal.classList.add("modalWindowSearch--disabled");
    }
  });
});
