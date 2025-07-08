gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", {
  opacity: 0,
  x: -100,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".hero-img", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.3
});

gsap.from(".about h2, .about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.utils.toArray(".product-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    rotateY: 90,
    transformOrigin: "center",
    duration: 1.2,
    delay: i * 0.2,
    ease: "power3.out"
  });
});

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      boxShadow: "0 0 25px #ffcce0",
      scale: 1.03,
      duration: 0.3,
      ease: "power1.out"
    });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      boxShadow: "0 10px 20px rgba(255, 190, 210, 0.2)",
      scale: 1,
      duration: 0.3
    });
  });
});

gsap.from(".testimonial-box", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.from(".newsletter h2, .newsletter p, .newsletter form", {
  scrollTrigger: {
    trigger: ".newsletter",
    start: "top 85%"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.from(".navbar", {
  opacity: 0,
  y: -50,
  duration: 1.2,
  ease: "power2.out"
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3
    });
  });
});
