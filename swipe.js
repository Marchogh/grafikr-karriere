const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    watchSlidesVisibility: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
    },
    autoplay: {
        delay: 3000
    },
});