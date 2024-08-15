const elWrapper = document.querySelector(".wrapper");
const elTemplate = document.querySelector("template");
const elMainImg = document.querySelector(".product-img");
const elTitle = document.querySelector(".title-product");
const elPrice = document.querySelector(".prise-product");
const ID = JSON.parse(localStorage.getItem("id"));
const products = JSON.parse(localStorage.getItem("products"));
console.log(ID);

let filteredProducts = products.filter((product) => {
  return ID.includes(product.id);
});
function getElement(element, parent = document) {
  return parent.querySelector(element);
}

function renderProduct(array = filteredProducts, parent = elWrapper) {
  parent.textContent = null;

  const fragment = new DocumentFragment();
  array.forEach((product) => {
    const newProduct = elTemplate.content.cloneNode(true);
    const mainImg = getElement(".product-img", newProduct);
    const title = getElement(".title-product", newProduct);
    const price = getElement(".prise-product", newProduct);
    const elDeleteBnt = getElement(".product-delete", newProduct);
    elDeleteBnt.dataset.id = product.id;

    mainImg.src = product.image;

    title.textContent = product.title;
    price.textContent = product.price + " ₽";

    fragment.appendChild(newProduct);
  });
  parent.appendChild(fragment);
}
renderProduct();

elWrapper.addEventListener("click", (e) => {
  if (e.target.className.includes("product-delete")) {
    const id = +e.target.dataset.id;
    const filteredArray = filteredProducts.filter((product) => {
      return id !== +product.id;
    });
    filteredProducts = filteredArray;
    renderProduct();
    console.log(filteredProducts);
  }
  if (filteredProducts.length == 0) {
    localStorage.removeItem("id");
    elWrapper.innerHTML = `<h2 class="text-center">У вас нет товара в корзине<h2/>`;
  }
});
