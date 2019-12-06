console.log("linked");
var previousButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");
var carouselBox = document.querySelector(".carouselbox");

var images = [
  "https://cdn.vox-cdn.com/thumbor/xi-ECRpx4kGYApH-OY8rJP8VhWg=/0x0:700x467/920x613/filters:focal(294x178:406x290):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65810465/EKo3U_qXkAEK1Fz.0.jpeg",
  "https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_1024.jpg",
  "https://static01.nyt.com/images/2019/12/03/world/03xp-lilbub/merlin_165345945_7a6f87a8-cdf3-4d00-b389-282ad7630953-superJumbo.jpg?quality=90&auto=webp"
];
var index = 0;
previousButton.addEventListener("click", event => {
  event.stopPropagation();
  index++;
  if (index >= images.length) index = 0;
  carouselBox.style.backgroundImage = "url(" + images[index] + ")";
});

nextButton.addEventListener("click", event => {
  event.stopPropagation();
  index--;
  if (index < 0) index = images.length - 1;
  carouselBox.style.backgroundImage = "url(" + images[index] + ")";
});

// carouselBox.addEventListener("click", function(event) {
// });
