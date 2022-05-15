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



// const scrollReveal = ScrollReveal({
//     origin: "top",
//     distance: "5px",
//     duration: 700,
//     reset: true,
// });

// scrollReveal.reveal(
//     `
// .s-hero .title, 
// .s-success .tag ,
// .title-success,
// .cards,
// .card,
// .s-about,
// .about-me .my-picture,
// .s-cases,
// .title-cases,
// .cases`, { interval: 50 }
// );