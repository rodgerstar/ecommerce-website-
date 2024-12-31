const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
      console.log("you clicked!" + index);
    });
});