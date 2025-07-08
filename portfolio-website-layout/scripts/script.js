const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power1.out"
    });
});

const tl = gsap.timeline();

tl.from("#nav", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
})
.from("#hero h1", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.5")
.from("#hero h5", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.5")
.from(".project-item", {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
}, "-=0.5")
.from("#aboutme", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.5")
.from(".finalfooter", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.5");
