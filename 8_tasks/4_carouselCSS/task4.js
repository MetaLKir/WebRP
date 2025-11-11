const images = document.querySelectorAll('.img');
const nextButton = document.querySelector('#nextBtn');
const prevButton = document.querySelector('#prevBtn');

nextButton.onclick = () => spinCarousel();
prevButton.onclick = () => spinCarousel(false);

let currentIndex = 0;
images[currentIndex].style.display = 'block';

function spinCarousel(isForward = true) {
    images[currentIndex].style.display = 'none';
    if (isForward) {
        currentIndex < images.length - 1 ? currentIndex++ : currentIndex = 0;
    } else {
        currentIndex > 0 ? currentIndex-- : currentIndex = images.length - 1;
    }
    images[currentIndex].style.display = 'block';
}