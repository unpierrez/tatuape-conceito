document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const menuList = document.getElementById('menu-list');
        menuList.classList.toggle('show');
    }

    document.getElementById('hamburger').addEventListener('click', toggleMenu);

    const categoriesSlider = document.querySelector('.categories-slider');
    const recommendedSlider = document.querySelector('.recommended-slider');
    const glassesSlider = document.querySelector('.glasses-slider');
    const perfumeSlider = document.querySelector('.perfume-slider');

    const slideLeft = (slider) => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const slideRight = (slider) => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    }

    document.querySelector('.slider-nav.left').addEventListener('click', () => slideLeft(categoriesSlider));
    document.querySelector('.slider-nav.right').addEventListener('click', () => slideRight(categoriesSlider));

    document.querySelector('.recommended-nav.left').addEventListener('click', () => slideLeft(recommendedSlider));
    document.querySelector('.recommended-nav.right').addEventListener('click', () => slideRight(recommendedSlider));

    document.querySelector('.glasses-nav.left').addEventListener('click', () => slideLeft(glassesSlider));
    document.querySelector('.glasses-nav.right').addEventListener('click', () => slideRight(glassesSlider));

    document.querySelector('.perfume-nav.left').addEventListener('click', () => slideLeft(perfumeSlider));
    document.querySelector('.perfume-nav.right').addEventListener('click', () => slideRight(perfumeSlider));

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
