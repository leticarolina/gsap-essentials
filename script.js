/*-------------------------ANIMATING WITH GSAP---------------*/

//Tweens are the name of basic animation functions from within GSAP.

// gsap.to() method -  tween will start at the element's current state (declared in css) and animate "to" the values defined in the tween.
// gsap.from() method - Like a backwards .to() where it animates "from" the values defined in the tween and ends at the element's current state (declared in css).
//.fromTo() - You define both the starting and ending values.
//.set() Immediately sets properties (no animation). It's essentially a zero-duration .to() tween.
//.timeline() =

//SYNTAX
//gsap.tween("idOrClass", {key: value, key:value})

//PROPERTIES
// repeat - How many times the animation should repeat.
//durantion - in secons how long will the animation last
//opacity: 0 ,if from will start at opacity 0 and go to 100% no opacity , if "to" will start with no opacity and fade in to 0
//stagger will take a time (in seconds) and create a delay to each element inside the .links class (if multiple targets are provided)

//GSAP works on other things rather than only HTML elements

//javascript
const object = { x: 0 };
// onUpdate gets called everytime the page update
gsap.to(object, {
  x: 100,
  duration: 3,
  onUpdate: () => {
    console.log(object.x); //will log every x distance until get it to 100
  },
});

//svg

//CODE FOR THE ANIMATION PROJECT

//animating from the current css style state to animation state
//y: the starting vertical position -100% to start from the very top of the header class
// // gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" }); redeclared as timeline
// // gsap.from(".link", { duration: 1, stagger: 0.2, opacity: 0, delay: 1 });
//x: "-100vh" = the starting point will be opposite side, all the way from the right
// gsap.from(".right", { duration: 2, x: "-100vh", ease: "power1.out" });
// //x: "100vh" = the starting point will be opposite, all the way from the left
// gsap.from(".left", { duration: 1, x: "100vh", ease: "power1.out", delay: 1 });
// // gsap.fromTo( "variable",{ starting point}, { end point , if has durantion need to declare here});
// gsap.fromTo(".footer", { y: "100vh" }, { duration: 2, y: "0" });
// gsap.fromTo(
//   ".button",
//   { delay: 2, scale: 0, rotation: 720 },
//   { scale: 1, rotation: 0, delay: 2 }
// );

//SAME CODE ABOVE BUT USING TIMELINE for DRY code
//.timeline combine together different animations that occurs on a sequence one after another
//use case: if you change duration of first animation all the others will be adequaly staggered
//timeline is always everything one after another, thats why .link will render only after .header is done
const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from(".header", { y: "-100%", ease: "bounce" })
  .from(".link", { stagger: 0.2, opacity: 0 })
  .from(".right", { duration: 2, x: "-100vh", ease: "power1.out" }, 1) //1 is the delay in seconds to start running (absolute delay )
  .from(".left", { duration: 2, x: "100vh", ease: "power1.out" }, "<") //"<" referring the delay to when the previous animation starts so they start together, can also add time on top "< .5 " (run after half second prev anition started)
  .fromTo(".footer", { y: "100vh" }, { duration: 2, y: "0" }, 1)
  .fromTo(".button", { scale: 0, rotation: 720 }, { scale: 1, rotation: 0 });

//reversing the whole animation using .reverse() this is only possiblie because code was declared using timeline
const button = document.querySelector(".button");
button.addEventListener("click", () => {
  timeline.timeScale(3); // .timeScale(3) will adjust speed of function, in this case 3x faster than the build in time
  timeline.reverse(); //reversing all animation from tineline
});
