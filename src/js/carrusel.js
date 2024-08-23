/*
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var cardWidth = $(".carousel-item").width();
var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselWidth - cardWidth * 4) {
    scrollPosition += cardWidth; //update scroll position
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".carousel-inner");
  if (element.classList.contains("overflow-hidden")) {
    element.classList.remove("overflow-hidden");
  }
}); */

var carouselInner = $(".carousel-inner");
var cardWidth = $(".carousel-item").outerWidth(true);
var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
  if (scrollPosition < carouselInner[0].scrollWidth - carouselInner.width()) {
    scrollPosition += cardWidth; // Actualiza la posición de desplazamiento
    carouselInner.animate({ scrollLeft: scrollPosition }, 600);
  }
});

$(".carousel-control-prev").on("click", function () {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    carouselInner.animate({ scrollLeft: scrollPosition }, 600);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".carousel-inner");
  if (element.classList.contains("overflow-hidden")) {
    element.classList.remove("overflow-hidden");
  }
});
