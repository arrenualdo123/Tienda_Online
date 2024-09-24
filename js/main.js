const slides = document.querySelectorAll('.carousel-container img');
let currentSlide = 2;

function updateSlider() {
    slides.forEach((slide, index) => {
        const offset = index - currentSlide;
        slide.style.transform = `translateX(${offset * 150}px) scale(${1 - Math.abs(offset) * 0.2}) rotateY(${offset * 15}deg)`;
        slide.style.opacity = 1 - Math.abs(offset) * 0.3;
        slide.style.zIndex = -Math.abs(offset);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}

setInterval(nextSlide, 3000); 
updateSlider();
