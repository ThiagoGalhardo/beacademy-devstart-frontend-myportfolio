
if (window.matchMedia("(min-width: 624px)").matches) {
    /* a viewport tem pelo menos 624px de largura */
    window.sr = ScrollReveal({
        reset: true,
        distance: '60px',
        delay: 400
    });
} else {
    /* a viewport menos que 624px de largura */
    window.sr = ScrollReveal({
        reset: true,
        delay: 400,
        duration: 900,
    });

}


sr.reveal(`
.s-hero .title, 
.s-about,
.about-me,
.copy,
.title-cases
`, { delay: 300, origin: 'top' }
);
sr.reveal('header .container', { delay: 100, origin: 'top', distance: '5px' });

sr.reveal(`
  .s-success .tag ,
  .title-success,
  .title-contact
  `, { delay: 400, origin: 'left' }
);

sr.reveal(
    '.cards, .hello-image img'
    , { delay: 400, origin: 'right' }
);

sr.reveal('.input-group input, .input-group textarea', { delay: 600, origin: 'right', interval: 200, });
sr.reveal('.cards', { delay: 600, origin: 'right', interval: 200, });
sr.reveal('.input-button, .my-picture',
    { delay: 1200, origin: 'right' }
);


sr.reveal(`
 .about-me,
 .swiper
 `, { delay: 800, origin: 'bottom' }
);

sr.reveal('.techs a', { delay: 600, origin: 'bottom', interval: 200, });



var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {

        0: {
            slidesPerView: 1
        },

        1260: {
            effect: "coverflow",
            slidesPerView: 3,
            spaceBetween: 10
        }

    }
});
