document.querySelectorAll(".button").forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.add(
      item.classList.contains("button__delete") ? "button-click--danger" : "button-click--primary"
    );
  });

  item.addEventListener("animationend", function () {
    item.classList.remove("button-click--primary");
    item.classList.remove("button-click--danger");
  });
});
