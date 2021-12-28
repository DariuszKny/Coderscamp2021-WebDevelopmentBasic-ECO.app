const buttonNext = document.querySelector(".carousel-button_next");

const buttonPrevious = document.querySelector(".carousel-button_previous");

const carousel = document.querySelector('.carousel');

const slidesContainer = document.querySelector('.slides')

let currentSlide = 0;
const numSlides = slidesContainer.children.length; 

console.log(numSlides);

function handleNext() {
    currentSlide = (currentSlide + 1) % numSlides; 
    //carousel.style.transform=`translateX(${currentSlide * -100}%)`;
    carousel.style.setProperty('--current-slide', currentSlide);
}

function handlePrevious() {
    currentSlide = (currentSlide - 1) % numSlides; 
    if(currentSlide < 0){
        currentSlide += numSlides;
    }
    //carousel.style.transform=`translateX(${currentSlide * -100}%)`;
    carousel.style.setProperty('--current-slide', currentSlide);
}

buttonNext.addEventListener("click",handleNext);

buttonPrevious.addEventListener("click",handlePrevious);
