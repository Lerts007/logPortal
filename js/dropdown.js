// dropdown
document.querySelector(".dropdown__button").addEventListener("click", function () {
  document.querySelector(".dropdown").classList.toggle("open");
});

document.querySelectorAll(".dropdown__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".dropdown__button-ttile").innerHTML = `${selectedText}`;
    document.querySelector(".dropdown").classList.remove("open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

// для filter-type
document.querySelector(".filter-type__button").addEventListener("click", function () {
  document.querySelector(".filter-type").classList.toggle("open");
});

document.querySelectorAll(".filter-type__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".filter-type__select").innerHTML = `${selectedText}`;
    document.querySelector(".filter-type").classList.remove("open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".filter-type");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

// для countLogo
document.querySelector(".countLog-dropdown__button").addEventListener("click", function () {
  document.querySelector(".countLog-dropdown").classList.toggle("open");
});

document.querySelectorAll(".countLog-dropdown__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".countLog-dropdown__title").innerHTML = `${selectedText}`;
    document.querySelector(".countLog-dropdown").classList.remove("open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".countLog-dropdown");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});
