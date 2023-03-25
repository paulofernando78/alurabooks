const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination', 
        type: 'bullets',
    },
});

function clickMenu() {
    nav__menu__list.style.display = 'block'
}
