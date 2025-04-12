window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.7)";
  } else {
    header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.5)";
  }
});
