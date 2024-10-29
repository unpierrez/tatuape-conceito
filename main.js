document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const menuList = document.getElementById('menu-list');
        menuList.classList.toggle('show');
    }

    document.getElementById('hamburger').addEventListener('click', toggleMenu);

    const categoriesSlider = document.querySelector('.categories-slider');
    const recommendedSlider = document.querySelector('.recommended-slider');

    const slideLeft = () => {
        categoriesSlider.scrollBy({ left: -300, behavior: 'smooth' });
        recommendedSlider.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const slideRight = () => {
        categoriesSlider.scrollBy({ left: 300, behavior: 'smooth' });
        recommendedSlider.scrollBy({ left: 300, behavior: 'smooth' });
    }

    document.querySelector('.slider-nav.left').addEventListener('click', slideLeft);
    document.querySelector('.slider-nav.right').addEventListener('click', slideRight);
    document.querySelector('.recommended-nav.left').addEventListener('click', slideLeft);
    document.querySelector('.recommended-nav.right').addEventListener('click', slideRight);

    const recommendedAutoSlide = () => {
        const scrollAmount = 460;
        const totalWidth = recommendedSlider.scrollWidth;
        const currentScroll = recommendedSlider.scrollLeft;
        const clientWidth = recommendedSlider.clientWidth;
        const finalWidth = totalWidth - clientWidth;

        if (currentScroll + scrollAmount >= finalWidth) {
            recommendedSlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            recommendedSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    setInterval(recommendedAutoSlide, 4000);
});
