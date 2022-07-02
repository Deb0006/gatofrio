import menuData from "/menuData.js";
const menuObj = menuData;
const imgButton = [...document.querySelectorAll(".menu__container")];
const modal = document.querySelector(".popup-images");
const button = document.querySelector(".container__button");
const overlay = document.querySelector("#overlay");

const imgProduct = document.querySelector(".container__img--image");
const nameProduct = document.querySelector(".container__text--name");
const descProduct = document.querySelector(".container__text--description");

function loadModal(itemMenu) {
  const img = itemMenu.querySelector(".menu__container--images").src;
  const name = itemMenu.querySelector(".menu__container--name").innerText;
  imgProduct.src = img;
  nameProduct.innerText = name;
  descProduct.innerText = menuObj[name];
}

imgButton.forEach((img) => {
  img.addEventListener("click", () => {
    loadModal(img);
    modal.style.display = "grid";
    modal.classList.add("active");
    overlay.classList.add("active");
  });
});

button.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
});

// navbar hamburguer

const navbarOptions = document.querySelector(".navbar__options");
const navbarBtn = document.querySelector(".navbar__logo--hamburguer");

// navbarOptions.style.display = "none";
navbarBtn.addEventListener("click", () => {
  // console.log(navbarOptions.style.display);
  navbarOptions.style.display === "none"
    ? (navbarOptions.style.display = "grid")
    : (navbarOptions.style.display = "none");
});
