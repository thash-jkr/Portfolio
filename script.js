let firstScroll = false;
let linkClicked = false;

const links = document.querySelectorAll("#navbar a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    linkClicked = true;
    firstScroll = true;
  });
});

window.addEventListener("scroll", function (event) {
  const home = document.querySelector("#home");
  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const contacts = document.querySelector("#contacts");
  const progressBar = document.querySelector(".progress-bar");
  const scrollPosition = window.scrollY;

  if (!firstScroll && !linkClicked) {
    event.preventDefault();
    window.scrollTo({
      top: about.offsetTop,
      behavior: "smooth",
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
});

document.addEventListener("DOMContentLoaded", function () {
  const cardWraps = document.querySelectorAll(".card-wrap");

  cardWraps.forEach((cardWrap) => {
    const card = cardWrap.querySelector(".card");
    const cardBg = cardWrap.querySelector(".card-bg");
    let width = cardWrap.offsetWidth;
    let height = cardWrap.offsetHeight;
    let mouseX = 0;
    let mouseY = 0;
    let mouseLeaveDelay = null;

    // Set card background image from the data attribute
    const dataImage = cardWrap.getAttribute("data-image");
    cardBg.style.backgroundImage = `url(${dataImage})`;

    cardWrap.addEventListener("mousemove", (e) => {
      handleMouseMove(e, cardWrap, card, cardBg, width, height);
    });

    cardWrap.addEventListener("mouseenter", () => {
      clearTimeout(mouseLeaveDelay);
    });

    cardWrap.addEventListener("mouseleave", () => {
      mouseLeaveDelay = setTimeout(() => {
        mouseX = 0;
        mouseY = 0;
        updateStyles(card, cardBg, mouseX, mouseY, width, height);
      }, 1000);
    });

    function handleMouseMove(e, cardWrap, card, cardBg, width, height) {
      mouseX = e.pageX - cardWrap.offsetLeft - width / 2;
      mouseY = e.pageY - cardWrap.offsetTop - height / 2;
      updateStyles(card, cardBg, mouseX, mouseY, width, height);
    }

    function updateStyles(card, cardBg, mouseX, mouseY, width, height) {
      const mousePX = mouseX / width;
      const mousePY = mouseY / height;

      const rX = mousePX * 30;
      const rY = mousePY * -30;

      card.style.transform = `rotateY(${rX}deg) rotateX(${rY}deg)`;

      const tX = mousePX * -40;
      const tY = mousePY * -40;

      cardBg.style.transform = `translateX(${tX}px) translateY(${tY}px)`;
    }
  });
});
