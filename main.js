document.getElementById("devisForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("popup").classList.add("show");
  setTimeout(() => {
    document.getElementById("popup").classList.remove("show");
  }, 3000);
});