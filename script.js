import menuData from "/menuData.js";
const menuObj = menuData;
const imgButton = [...document.querySelectorAll(".menu__container")];
const modal = document.querySelector(".popup-images");
const button = document.querySelector(".container__button");
const overlay = document.querySelector("#overlay");

const imgProduct = document.querySelector(".container__img--image");
const nameProduct = document.querySelector(".container__text--name");
const descProduct = document.querySelector(".container__text--description");

const navbarOptions = document.querySelector(".navbar__options");
const navbarBtn = document.querySelector(".navbar__logo--hamburger");

//Modal menu
function loadModal(itemMenu) {
  if (typeof HTMLPictureElement !== "undefined") {
    // Use webp image
    var picture = itemMenu.querySelector("picture");
    var webpSource = picture.querySelector("source[type='image/webp']");
    var webpUrl = webpSource.getAttribute("srcset");
    imgProduct.src = webpUrl;
  } else {
    // Use png or jpg image
    var picture = itemMenu.querySelector("picture");
    var webpSource = picture.querySelector("source[type='image/webp']");
    var pngUrl = picture.querySelector("img").getAttribute("src");
    imgProduct.src = pngUrl;
  }

  const name = itemMenu.querySelector(".menu__container--name").innerText;
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

// navbar hamburguer click
navbarBtn.addEventListener("click", () => {
  // show or hide links
  navbarOptions.style.display === "grid"
    ? (navbarOptions.style.display = "none")
    : (navbarOptions.style.display = "grid");
  // animate hamburger
  navbarBtn.classList.contains("change")
    ? navbarBtn.classList.remove("change")
    : navbarBtn.classList.add("change");
});
