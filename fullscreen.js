// fullscreen.js

let currentIndex = 0;
let currentImages = [];

function openFullscreen(event) {
    if (event.target.tagName !== 'IMG') return;

    // Find all images in the clicked project card
    const projectCard = event.target.closest('.project-card');
    currentImages = Array.from(projectCard.querySelectorAll('img'));

    currentIndex = currentImages.indexOf(event.target);

    const modal = document.getElementById('fullscreenModal');
    const modalImage = document.getElementById('fullscreenImage');

    modalImage.src = currentImages[currentIndex].src;
    modal.style.display = 'flex';
}

function closeFullscreen(event) {
    // Close if clicked outside the image or on modal background
    if (event.target.id === 'fullscreenModal' || event.target.id === 'closeBtn') {
        document.getElementById('fullscreenModal').style.display = 'none';
    }
}

function changeImage(direction) {
    if (!currentImages.length) return;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    const modalImage = document.getElementById('fullscreenImage');
    modalImage.src = currentImages[currentIndex].src;
}

// Attach event listener for image clicks (event delegation)
document.getElementById('projects').addEventListener('click', openFullscreen);

// Also close modal when clicking outside image
document.getElementById('fullscreenModal').addEventListener('click', closeFullscreen);