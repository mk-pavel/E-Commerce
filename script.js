// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Slider Functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-control.prev');
    const nextButton = document.querySelector('.slider-control.next');
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Add event listeners to the buttons
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    // Auto Slide (Optional)
    setInterval(nextSlide, 2000); // Change slide every 5 seconds

    // Show the first slide initially
    showSlide(currentIndex);
});