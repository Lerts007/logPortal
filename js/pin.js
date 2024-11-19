document.querySelectorAll(".icon-pin").forEach(function (item) {
  item.addEventListener("click", function (event) {
    item.classList.toggle("icon-pin--disabled");
  });
});
