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
    const acessoriesSlider = document.querySelector('.acessories-slider');

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

    document.querySelector('.acessories-nav.left').addEventListener('click', () => slideLeft(acessoriesSlider));
    document.querySelector('.acessories-nav.right').addEventListener('click', () => slideRight(acessoriesSlider));

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

    const acessoriesAutoSlide = () => {
        const scrollAmount = 460;
        const totalWidth = acessoriesSlider.scrollWidth;
        const currentScroll = acessoriesSlider.scrollLeft;
        const clientWidth = acessoriesSlider.clientWidth;
        const finalWidth = totalWidth - clientWidth;

        if (currentScroll + scrollAmount >= finalWidth) {
            acessoriesSlider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            acessoriesSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
    setInterval(acessoriesAutoSlide, 3000);
    setInterval(recommendedAutoSlide, 3000);
});
