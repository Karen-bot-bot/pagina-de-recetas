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

// deslizamiento de sidebar

// var sidebar = document.getElementById("offcanvasResponsive");
// var toggleBtn = document.getElementById("toggle-btn");

// toggleBtn.addEventListener("click", function () {
//   if (sidebar.style.left === "-250px") {
//     sidebar.style.left = "0"; // Abre el sidebar
//   } else {
//     sidebar.style.left = "-250px"; // Cierra el sidebar
//   }
// });

