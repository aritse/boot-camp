//http://placekitten.com/300/200
var carousel = document.querySelector(".carouselbox");
var previousButton = document.querySelector("button.prev");
var nextButton = document.querySelector("button.next");

var images = ["http://placekitten.com/300/200","http://placekitten.com/300/201","http://placekitten.com/300/202","http://placekitten.com/300/199"]

// console.log(carousel,previousButton,nextButton);
var imageIndex = 0;

carousel.style.backgroundImage = "url(" + images[0]+ ")";

nextButton.addEventListener("click",function(){
    event.stopPropagation();
    imageIndex++;
    if(imageIndex>=images.length){
        imageIndex = 0
    }
    console.log(imageIndex);
    carousel.setAttribute("style","background-image: url(" + images[imageIndex]+ ")");
})

previousButton.addEventListener("click",function(){
    event.stopPropagation();
    imageIndex--;
    if(imageIndex<0){
        imageIndex = images.length-1;
    }
    console.log(imageIndex);
    carousel.style.backgroundImage = "url(" + images[imageIndex]+ ")";
})

carousel.addEventListener("click",function() {
    location.href = images[imageIndex];
})
