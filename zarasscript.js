// FLOATY ANIMATION
gsap.to(".floaty", {
  y: "+=30",       // gentle up/down drift
  rotation: "+=10", // rotate a bit
  duration: 4,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1
});

// horizontal/random drift
gsap.to(".floaty", {
  x: "+=25",
  duration: 6,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1
});

// random rotation
gsap.to(".floaty", {
  rotation: () => gsap.utils.random(-20, 20),
  duration: 5,
  ease: "sine.inOut",
  yoyo: true,
  repeat: -1
});