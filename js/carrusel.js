var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    //check if you can go any further
    scrollPosition += cardWidth; //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

// menú desplegable

// var botonMenu = document.querySelector(".navbar-toggler");
// var nav = document.querySelector(".navegador");
// botonMenu.addEventListener("click", function () {
//   nav.classList.toggle("fondo-nav");
// });

// const hamburguesa = document.querySelector(".navbar-toggler-icon");
// const menu = document.querySelector(".navegador");

// console.log(menu);
// console.log(hamburguesa);

// hamburguesa.addEventListener("click", () => {
//   menu.classList.toggle("spread");
// });

// window.addEventListener("click", (e) => {
//   if (
//     menu.classList.contains("spread") &&
//     e.target != menu &&
//     e.target != hamburguesa
//   ) {
//     menu.classList.toggle("spread");
//   }
// });
