document.querySelectorAll(".table__icon-search").forEach(function (item) {
  item.addEventListener("click", function () {
    const thElement = item.closest("th");

    const searchFilter = thElement.querySelector(".search-filter");

    searchFilter.classList.toggle("search-filter--disabled");
  });
});

document.querySelectorAll(".dropdown__icon-filter").forEach(function (item) {
  item.addEventListener("click", function () {
    const thElement = item.closest(".dropdown__toggle");
    console.log(thElement);

    const searchFilter = thElement.querySelector(".search-filter");

    console.log(searchFilter);

    searchFilter.classList.toggle("search-filter--disabled");
  });
});

document.addEventListener("click", function (event) {
  document.querySelectorAll(".search-filter").forEach(function (modal) {
    if (!modal.contains(event.target) && !event.target.closest(".table__icon-search")) {
      modal.classList.add("search-filter--disabled");
    }
  });
});
