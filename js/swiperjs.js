document.addEventListener('DOMContentLoaded', function() {

var swiper = new Swiper('.hero-main-swiper', {
loop: true,
observer: true,
    observeParents: true,
    updateOnWindowResize: true,

pagination: {
el: '.swiper-pagination',
clickable: true,
},

navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

autoplay: {
delay: 1700,
pauseOnMouseEnter: true,
},
});

});