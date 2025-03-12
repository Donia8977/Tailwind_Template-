document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type: 'loop', // Infinite loop mode
        perPage: 3, // Show 1 slide at a time
        autoplay: true, // Auto-play slides
        interval: 3000, // Change slides every 3s
        arrows: true, // Show next/prev buttons
        pagination: true, // Show pagination dots
        speed: 600, // Animation speed
        gap: '1rem',
    }).mount();
});
