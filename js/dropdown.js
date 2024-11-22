// dropdown
document.querySelector(".chart__button").addEventListener("click", function () {
  document.querySelector(".chart").classList.toggle("dropdown--open");
});

document.querySelectorAll(".chart__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".chart__button-ttile").innerHTML = `${selectedText}`;
    document.querySelector(".chart").classList.remove("dropdown--open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".chart");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("dropdown--open");
  }
});

// для filterType
document.querySelector(".filterType__button").addEventListener("click", function () {
  document.querySelector(".filterType").classList.toggle("dropdown--open");
});

document.querySelectorAll(".filterType__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".filterType__select").innerHTML = `${selectedText}`;
    document.querySelector(".filterType").classList.remove("dropdown--open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".filterType");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("dropdown--open");
  }
});

// для countLogo
document.querySelector(".countLog__button").addEventListener("click", function () {
  document.querySelector(".countLog").classList.toggle("dropdown--open");
});

document.querySelectorAll(".countLog__content a").forEach(function (item) {
  item.addEventListener("click", function (event) {
    const selectedText = item.textContent;
    document.querySelector(".countLog__button-title").innerHTML = `${selectedText}`;
    document.querySelector(".countLog").classList.remove("dropdown--open");
  });
});

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".countLog");

  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("dropdown--open");
  }
});
