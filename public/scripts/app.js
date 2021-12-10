//INTRO VIDEO
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//SEC 2
const section = document.querySelector('section');
const end = section.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//SCENES
let scene = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0
}).addIndicators()
.setPin(intro)
.addTo(controller);

//Text Animation
const textAnim = gsap.fromTo(text, 3, {opacity: 1}, {opacity: 0})

let scene2 = new ScrollMagic.Scene({
    duration: 500,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);



//VID ANIM
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    
    video.currentTime = delay;
}, /*1000/FPS**/ 16.6);

