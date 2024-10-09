window.addEventListener("scroll", function() {
  const home = document.querySelector("#home");
  const navbar = document.querySelector("#navbar");
  const scrollPosition = window.scrollY;

  if (scrollY) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
})