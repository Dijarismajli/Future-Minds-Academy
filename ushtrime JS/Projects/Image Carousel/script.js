const carouselImage = document.querySelector('#carouselImage')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

const images = [
    'https://via.placeholder.com/400?text=Image+1',
    'https://via.placeholder.com/400?text=Image+2',
    'https://via.placeholder.com/400?text=Image+3',
    'https://via.placeholder.com/400?text=Image+4'
];

// Variable to track the current image index
let currentIndex = 0;

// Function to update the displayed image
function updateImage() {
    carouselImage.src = images[currentIndex];
}

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image if at the end
    updateImage();
});

// Event listener for "Previous" button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the last image if at the start
    updateImage();
});

updateImage();