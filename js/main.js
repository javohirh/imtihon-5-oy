import products from "./data.js";

function getElement(element, parent = document) {
  return parent.querySelector(element);
}

const elCard = getElement(".cards");
const elTemplate = getElement("template");
const elFilter = getElement(".filter-item");
const elFilterInput = getElement("#filter-none");
const elAngleDown = getElement(".fa-angle-down");
const elAngleUp = getElement(".fa-angle-up");
const elResetFilterBnt = getElement("#reset-filter");
const elSelect = getElement("#filter-select");

elSelect.addEventListener("change", () => {
  const filteredArray = products.filter((product) => {
    return product.categories == elSelect.value;
  });
  renderProduct(filteredArray);
});

elFilter.addEventListener("click", () => {
  elFilter.classList.toggle("border-none");
  elFilterInput.classList.toggle("filter-input");
  elAngleUp.classList.toggle("d-none");
  elAngleDown.classList.toggle("d-none");
});
elResetFilterBnt.addEventListener("click", () => {
  renderProduct();
});

function renderProduct(array = products, parent = elCard) {
  parent.textContent = null;

  const fragment = new DocumentFragment();
  array.forEach((product) => {
    const newProduct = elTemplate.content.cloneNode(true);
    const mainImg = getElement(".card-main-img", newProduct);
    const title = getElement(".card-text-title", newProduct);
    const price = getElement(".card-price", newProduct);
    const realPrice = getElement(".card-real-price", newProduct);
    const elCart = getElement(".cart", newProduct);
    elCart.dataset.id = product.id;
    mainImg.src = product.image;
    mainImg.dataset.id = product.id;
    title.textContent = product.title;
    price.textContent = product.price + " ₽";
    realPrice.textContent = product.realPrice + " ₽";
    fragment.appendChild(newProduct);
  });
  parent.appendChild(fragment);
}
renderProduct();

elFilterInput.addEventListener("submit", (e) => {
  e.preventDefault();
  const minVal = Number(elFilterInput["min-amount"].value);
  const maxVal = Number(elFilterInput["max-amount"].value);
  const filterdArray = products.filter((product) => {
    const number = Number(product.price);
    return minVal < number && maxVal > number;
  });
  renderProduct(filterdArray);

  elFilterInput.reset();
});

const cardElement = [];
elCard.addEventListener("click", (e) => {
  if (e.target.classList.contains("cart")) {
    const id = +e.target.dataset.id;
    e.target.classList.toggle("active-shop");
    cardElement.push(id);
    localStorage.setItem("id", JSON.stringify(cardElement));
  }
  localStorage.setItem("products", JSON.stringify(products));
  if (e.target.classList.contains("card-main-img")) {
    const id = +e.target.dataset.id;
    localStorage.setItem("singleId", id);
  }
});
