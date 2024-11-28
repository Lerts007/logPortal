document.querySelectorAll(".table__icon-pin").forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("table__icon-pin--disabled");
  });
});
