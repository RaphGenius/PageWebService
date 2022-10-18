const header = document.querySelector(".header");
const btnsHeader = document.querySelectorAll(
  ".client-group-btn a:not(:nth-child(2))"
);
const linkHeader = document.querySelectorAll("ul li");
const logo = document.querySelector(".img-dark-version");
const loupe = document.querySelector(".fa-magnifying-glass");
const arrows = document.querySelectorAll(".imgArrow");
const openListe = document.querySelectorAll(".linkOpenListe");
const burgerBtn = document.querySelector(".burger");
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
    burgerBtn.style.color = "white";
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
    burgerBtn.style.color = "black";
    burgerBtn.style.transition = "200ms all ease";
  }
}

const title = document.querySelector(".title");
const text = "Decouvrez les fonds marins";

function typewriter(text, index) {
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

const intersectionObserverCard = new IntersectionObserver(handleIntersect, {
  rootMargin: "-10%",
});

cards.forEach((card) => {
  intersectionObserverCard.observe(card);
});

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      /* intersectionObserverCard.unobserve(entry.target); */
    } else if (!entry.isIntersecting) {
      entry.target.classList.remove("active");
    }
  });
}

const formationContent = [document.querySelector(".formation-img")];

const intersectionObserverFormationContent = new IntersectionObserver(
  handleFormationIntersect,
  { rootMargin: "-5%" }
);

formationContent.forEach((el) => {
  intersectionObserverFormationContent.observe(el);
  console.log(el);
});
function handleFormationIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else if (!entry.isIntersecting) {
      entry.target.classList.remove("active");
    }
  });
}

const navBarResp = document.querySelector(".container-nav-resp");
const closeNavBarResp = document.querySelector(".top-nav-resp i");
burgerBtn.addEventListener("click", () => {
  navBarResp.classList.toggle("active");
});

closeNavBarResp.addEventListener("click", () => {
  navBarResp.classList.remove("active");
});
