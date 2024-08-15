const elMainImg = document.querySelector(".img");
const elTitle = document.querySelector(".title-abaut");
const elPrice = document.querySelector(".skidka");
const elRealPrice = document.querySelector(".bez-skidka");
const elInfo = document.querySelector(".paragrf-title");
const cartBtn = document.querySelector(".btn-korzinka");
const id = Number(localStorage.getItem("singleId"));
const products = JSON.parse(localStorage.getItem("products"));

const product = products.filter((product) => product.id == id)[0];

elMainImg.src = product.image;
elTitle.textContent = product.title;
elRealPrice.textContent = product.realPrice + " ₽";
elPrice.textContent = product.price + " ₽";
elInfo.textContent = product.description;

const cardElement = [];
cartBtn.addEventListener("click", () => {
  cardElement.push(id);
  localStorage.setItem("id", JSON.stringify(cardElement));
});
