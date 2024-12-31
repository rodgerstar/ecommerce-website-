const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Bracelet",
    price: 1000,
    colors: [
      {
        code: "black",
        img: "img/bracelet.png",
      },
      {
        code: "blue",
        img: "img/bracelet.png",
      },
        {
        code: "red",
        img: "img/bracelet.png",
      },
        {
        code: "green",
        img: "img/bracelet.png",
      },
        {
        code: "yellow",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(156, 63, 63, 0.61)",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(85, 85, 124, 0.85)",
        img: "img/bracelet.png",
      },
        {
        code: "#442155",
        img: "img/bracelet.png",
      },
        {
        code: "#c5f1c3",
        img: "img/bracelet.png",
      },
        {
        code: "#ff6868",
        img: "img/bracelet.png",
      },
    ],
  },
  {
    id: 2,
    title: "Neckless",
    price: 2500,
    colors: [
      {
        code: "black",
        img: "img/neckless.png",
      },
      {
        code: "blue",
        img: "img/bracelet.png",
      },
        {
        code: "red",
        img: "img/bracelet.png",
      },
        {
        code: "green",
        img: "img/bracelet.png",
      },
        {
        code: "yellow",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(156, 63, 63, 0.61)",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(85, 85, 124, 0.85)",
        img: "img/bracelet.png",
      },
        {
        code: "#442155",
        img: "img/bracelet.png",
      },
        {
        code: "#c5f1c3",
        img: "img/bracelet.png",
      },
        {
        code: "#ff6868",
        img: "img/bracelet.png",
      },
    ],
  },
  {
    id: 3,
    title: "Waist Beads",
    price: 700,
   colors: [
      {
        code: "black",
        img: "img/waistbeads.png",
      },
      {
        code: "blue",
        img: "img/waistbead2.png",
      },
        {
        code: "red",
        img: "img/waistbead3.png",
      },
        {
        code: "green",
        img: "img/waistbead4.png",
      },
        {
        code: "yellow",
        img: "img/waistbead5.png",
      },
        {
        code: "rgba(156, 63, 63, 0.61)",
        img: "img/waistbead6.png",
      },
        {
        code: "rgba(85, 85, 124, 0.85)",
        img: "img/bracelet.png",
      },
        {
        code: "#442155",
        img: "img/bracelet.png",
      },
        {
        code: "#c5f1c3",
        img: "img/bracelet.png",
      },
        {
        code: "#ff6868",
        img: "img/bracelet.png",
      },
    ],
  },
  {
    id: 4,
    title: "Massai Shuka",
    price: 700,
    colors: [
      {
        code: "black",
        img: "img/massaishuka.png",
      },
      {
        code: "blue",
        img: "img/bracelet.png",
      },
        {
        code: "red",
        img: "img/bracelet.png",
      },
        {
        code: "green",
        img: "img/bracelet.png",
      },
        {
        code: "yellow",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(156, 63, 63, 0.61)",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(85, 85, 124, 0.85)",
        img: "img/bracelet.png",
      },
        {
        code: "#442155",
        img: "img/bracelet.png",
      },
        {
        code: "#c5f1c3",
        img: "img/bracelet.png",
      },
        {
        code: "#ff6868",
        img: "img/bracelet.png",
      },
    ],
  },
  {
    id: 5,
    title: "Wedding Special",
    price: 20000,
    colors: [
      {
        code: "black",
        img: "img/wedding.png",
      },
      {
        code: "blue",
        img: "img/bracelet.png",
      },
        {
        code: "red",
        img: "img/bracelet.png",
      },
        {
        code: "green",
        img: "img/bracelet.png",
      },
        {
        code: "yellow",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(156, 63, 63, 0.61)",
        img: "img/bracelet.png",
      },
        {
        code: "rgba(85, 85, 124, 0.85)",
        img: "img/bracelet.png",
      },
        {
        code: "#442155",
        img: "img/bracelet.png",
      },
        {
        code: "#c5f1c3",
        img: "img/bracelet.png",
      },
        {
        code: "#ff6868",
        img: "img/bracelet.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImage = document.querySelector(".productImage")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      choosenProduct = products[index]
       //change texts of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "Ksh" + choosenProduct.price;
      currentProductSizes.textContent = choosenProduct.size;
      currentProductImage.src = choosenProduct.colors[0].img;
        //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });

    });
});