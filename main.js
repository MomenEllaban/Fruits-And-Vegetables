// swiper 

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


window.onscroll = ()=>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');


}