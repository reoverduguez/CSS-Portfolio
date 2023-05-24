const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

searchBtn.addEventListener("click", () => {
  search.classList.toggle("active");
  searchBar.focus();
});
