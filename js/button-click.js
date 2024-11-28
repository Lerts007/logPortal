document.querySelectorAll(".button").forEach(function (item) {
  item.addEventListener("click", function () {
    const className = item.classList.contains("button--secondary")
      ? "button__click--secondary"
      : item.classList.contains("button--danger")
      ? "button__click--danger"
      : item.classList.contains("button--warning")
      ? "button__click--warning"
      : "button__click--primary";

    item.classList.add(className);
  });

  item.addEventListener("animationend", function () {
    item.classList.remove(
      "button__click--primary",
      "button__click--secondary",
      "button__click--danger",
      "button__click--warning"
    );
  });
});
