console.log(`Hello world`)


let hamburgerBtn = document.querySelector(".hamburgerBtn");
let overlayMobile = document.querySelector(".overlayNavMobile")
let closeNavBtn = document.querySelector(".closeBtn");

hamburgerBtn.addEventListener("click", () => {
    TweenMax.to(overlayMobile, {
        display: "block",
        left: "0px",
        duration: .3,
        ease: "ease-in"
    })
})
// var obj = {prop: 10};
// gsap.to(obj, {
//   duration: 1,
//   prop: 200, 
//   //onUpdate fires each time the tween updates; we'll explain callbacks later.
//   onUpdate: function() {
//     console.log(obj.prop); //logs the value on each update.
//   }
// });

closeNavBtn.addEventListener("click", () => {
    TweenMax.to(overlayMobile, {
        display: "none",
        left: "-1000px",
        duration: .3,
        ease: "ease-in"
    })
})