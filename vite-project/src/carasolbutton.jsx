let currentIndex = 0;

function nextSlide() {
    const carouselInner = document.querySelector('.cara');
    const items = document.querySelectorAll('.care');
    currentIndex = (currentIndex + 1) % items.length;
    carouselInner.scrollTo({
        left: currentIndex * carouselInner.clientWidth,
        behavior: 'smooth'
    });
}

function prevSlide() {
    const carouselInner = document.querySelector('.cara');
    const items = document.querySelectorAll('.care');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    carouselInner.scrollTo({
        left: currentIndex * carouselInner.clientWidth,
        behavior: 'smooth'
    });
}
