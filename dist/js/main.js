"use strict";

console.log("Hello world");
var hamburgerBtn = document.querySelector(".hamburgerBtn");
var overlayMobile = document.querySelector(".overlayNavMobile");
var closeNavBtn = document.querySelector(".closeBtn");
hamburgerBtn.addEventListener("click", function () {
  TweenMax.to(overlayMobile, {
    display: "block",
    left: "0px",
    duration: .3,
    ease: "ease-in"
  });
}); // var obj = {prop: 10};
// gsap.to(obj, {
//   duration: 1,
//   prop: 200, 
//   //onUpdate fires each time the tween updates; we'll explain callbacks later.
//   onUpdate: function() {
//     console.log(obj.prop); //logs the value on each update.
//   }
// });

closeNavBtn.addEventListener("click", function () {
  TweenMax.to(overlayMobile, {
    display: "none",
    left: "-1000px",
    duration: .3,
    ease: "ease-in"
  });
});
//# sourceMappingURL=main.js.map
