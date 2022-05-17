ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 1000,
    delay: 400
});


ScrollReveal().reveal(
    `
.s-hero .title, 
.s-about,
.about-me .my-picture,
.form-contact,
.copy
`, {
    delay: 300,
    origin: 'top'

}
);

ScrollReveal().reveal(
    ` 
  .s-success .tag ,
  .title-success,
  .cards,
  .card,
  .s-cases,
  .title-cases,
  .cases,
  .title-contact`, {
    delay: 400,
    origin: 'left'

}
);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});