document.addEventListener('DOMContentLoaded', () => {
    const toggleMenu = () => {
        const menuList = document.getElementById('menu-list');
        menuList.classList.toggle('show');
    }

    document.getElementById('hamburger').addEventListener('click', toggleMenu);

    const slider = document.querySelector('.categories-slider');

    const slideLeft = () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    }

    const slideRight = () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    }

    document.querySelector('.slider-nav.left').addEventListener('click', slideLeft);
    document.querySelector('.slider-nav.right').addEventListener('click', slideRight);
});
