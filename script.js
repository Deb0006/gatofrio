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
    // modal.classList.remove("inactive");
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

// const imagenX = document.querySelector(".menu__containers")

// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");
// console.log(openModalButtons);
// console.log(closeModalButtons);

// openModalButtons.forEach((div) => {
//   div.addEventListener("click", () => {
//     const modal = document.querySelector(div.dataset.modalTarget);
//     console.log(div);
//     console.log(modal);
//     openModal(modal);
//   });
// });
// overlay.addEventListener("click", () => {
//   const modal = document.querySelectorAll(".popup-images.active");
//   modal.forEach((modal) => {
//     closeModal(modal);
//   });
// });
// closeModalButtons.forEach((div) => {
//   div.addEventListener("click", () => {
//     const modal = div.closest(".popup-images");
//     console.log(div);
//     console.log(modal);
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }
