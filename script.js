let firstScroll = false;
let linkClicked = false;

const links = document.querySelectorAll("#navbar a");

links.forEach(link => {
  link.addEventListener("click", function() {
    linkClicked = true;
    firstScroll = true;
  })
})

window.addEventListener("scroll", function(event) {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const progressBar = document.querySelector(".progress-bar");
  const scrollPosition = window.scrollY;

  if (!firstScroll && !linkClicked) {
    event.preventDefault();
    window.scrollTo({
      top: home.offsetTop,
      behavior: "smooth"
    });
    firstScroll = true;
  }

  if (firstScroll && scrollY) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
    firstScroll = false;
    linkClicked = false;
  }

  const aboutTop = about.offsetTop;
  const aboutHeight = about.offsetHeight;
  const aboutScrollPosition = window.scrollY + window.innerHeight;

  const progress = Math.min((aboutScrollPosition - aboutTop) / aboutHeight, 1);
  progressBar.style.height = `${progress * 100}%`;
})