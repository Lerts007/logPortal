document.querySelectorAll(".tableC__icon-pin").forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("tableC__icon-pin--disabled");
  });
});
