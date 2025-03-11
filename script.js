// script.js

// Array of background images
const backgrounds = [
    '1.jpg',
    '2.jpeg',
    '3.avif',
    '4,jpg'
];

let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    const backgroundSlider = document.querySelector('.background-slider');
    currentIndex = (currentIndex + 1) % backgrounds.length; // Loop through the images
    backgroundSlider.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Set the initial background
document.addEventListener('DOMContentLoaded', () => {
    const backgroundSlider = document.querySelector('.background-slider');
    backgroundSlider.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
});