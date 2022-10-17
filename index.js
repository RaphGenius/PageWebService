const header = document.querySelector(".header");
const btnsHeader = document.querySelectorAll(
  ".client-group-btn a:not(:nth-child(2))"
);
const linkHeader = document.querySelectorAll("ul li");
const logo = document.querySelector(".img-dark-version");
const loupe = document.querySelector(".fa-magnifying-glass");
const arrows = document.querySelectorAll(".imgArrow");
const openListe = document.querySelectorAll(".linkOpenListe");

window.addEventListener("scroll", swapColorHeader);

function swapColorHeader() {
  console.log(scrollY);
  if (scrollY === 0) {
    header.classList.remove("swapWhiteHeader");
    btnsHeader.forEach((btn) => {
      btn.classList.remove("swapWhiteBtns");
    });
    linkHeader.forEach((link) => {
      link.classList.remove("swapWhiteLinks");
    });
    logo.style.opacity = 0;
    loupe.classList.remove("loupe-dark-version");
    arrows.forEach((arrow) => {
      arrow.style.filter = "brightness(1)";
    });
    openListe.forEach((item) => {
      item.classList.remove("swapWhiteLinks");
    });
  }
  if (scrollY > 0) {
    header.classList.add("swapWhiteHeader");
    btnsHeader.forEach((btn) => {
      btn.classList.add("swapWhiteBtns");
    });
    linkHeader.forEach((link) => {
      link.classList.add("swapWhiteLinks");
    });
    logo.style.opacity = 1;
    loupe.classList.add("loupe-dark-version");
    arrows.forEach((arrow) => {
      arrow.style.filter = "brightness(0)";
    });
    openListe.forEach((item) => {
      item.classList.add("swapWhiteLinks");
    });
  }
}

const title = document.querySelector(".title");
const text = "Lorem ipsum dolor sit amet.";

function typewriter(text, index) {
  if (index === text.length) {
  }
  if (index < text.length) {
    setTimeout(() => {
      title.textContent += text[index];
      typewriter(text, index + +1);
    }, 200);
  }
}

setTimeout(() => {
  typewriter(text, 0);
}, 300);

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", truc);
});

function truc() {
  console.log("truc");
}
console.log(cards);
