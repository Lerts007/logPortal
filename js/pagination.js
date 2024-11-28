// hover pagination
document.addEventListener("DOMContentLoaded", () => {
  const activItem = document.querySelector(".pagination__icon-serach--activ");
  const searchBlock = document.querySelector(".pagination__search");

  let hideTimeout;

  function showSearch() {
    clearTimeout(hideTimeout);
    searchBlock.classList.remove("pagination__search--disabled");
    searchBlock.classList.add("pagination__search--activ");
  }

  function hideSearch() {
    hideTimeout = setTimeout(() => {
      searchBlock.classList.add("pagination__search--disabled");
      searchBlock.classList.remove("pagination__search--activ");
    }, 200);
  }

  activItem.addEventListener("mouseenter", showSearch);
  activItem.addEventListener("mouseleave", (e) => {
    if (!searchBlock.contains(e.relatedTarget)) {
      hideSearch();
    }
  });

  searchBlock.addEventListener("mouseenter", showSearch);
  searchBlock.addEventListener("mouseleave", (e) => {
    if (!activItem.contains(e.relatedTarget)) {
      hideSearch();
    }
  });
});
