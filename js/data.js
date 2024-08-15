export const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [
      {
        id: 1,
        image: "../images/electron-lock.png",
        price: 7000,
        title: "Вариативный замок Golden Soft для отеля",
        realPrice: 8000,
        categories: "Популярности замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 2,
        image: "../images/smart-lock.png",
        price: 33000,
        title: "Вариативный замок Golden Soft для отеля",
        realPrice: 39000,
        categories: "Популярности замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 3,
        image: "../images/hand-lock.png",
        price: 9000,
        title: "Вариативный замок Golden Soft для отеля",
        realPrice: 12000,
        categories: "Электронный замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 4,
        image: "../images/electron-lock.png",
        title: "Вариативный замок Golden Soft для отеля",
        price: 15000,
        realPrice: 18000,
        categories: "Умный замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 5,
        image: "../images/hand-lock.png",
        title: "Вариативный замок Golden Soft для отеля",
        price: 50000,
        realPrice: 56000,
        categories: "Ручной замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 6,
        image: "../images/smart-lock.png",
        title: "Вариативный замок Golden Soft для отеля",
        price: 14000,
        realPrice: 20000,
        categories: "Умный замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 7,
        image: "../images/electron-lock.png",
        title: "Вариативный замок Golden Soft для отеля",
        price: 6000,
        realPrice: 8000,
        categories: "Ручной замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 8,
        image: "../images/hand-lock.png",
        title: "Дверной Замок Golden Soft для офиса",
        price: 1000,
        realPrice: 2000,
        categories: "Электронный замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь. ",
        hasBasket: false,
      },
      {
        id: 9,
        image: "../images/smart-lock.png",
        title: "Вариативный замок Golden Soft для отеля",
        price: 6500,
        realPrice: 9000,
        categories: "Ручной замок",
        rating: "20",
        description:
          "Замок дверной электронный Golden SoftGS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.Подходит для установки на деревянную/межкомнатную дверь.",
        hasBasket: false,
      },
    ];
export default products;
