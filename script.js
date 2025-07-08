// ===============================
// GSAP Professional Animations
// Author: gagandeep-dev
// ======================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ========= NAVIGATION ==========
gsap.from(".nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

// Logo and Nav Items
const navTimeline = gsap.timeline();
navTimeline
  .from(".logo h1", { opacity: 0, x: -50, duration: 0.6 }, 0.2)
  .from(".nav-items ul li", {
    opacity: 0,
    y: -20,
    stagger: 0.15,
    duration: 0.5,
    ease: "back.out(1.7)"
  }, "<")
  .from(".nav-buttons", {
    opacity: 0,
    x: 50,
    duration: 0.6
  }, "<0.3");

// ========= HERO SECTION =========
const heroTimeline = gsap.timeline();
heroTimeline
  .from(".hero h3", { opacity: 0, y: 40, duration: 0.5 })
  .from(".hero h1", { opacity: 0, y: 40, duration: 0.7 }, "<0.3")
  .from(".hero p", { opacity: 0, y: 30, duration: 0.5 }, "<0.2")
  .from(["#view-projects", "#hire-me"], {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.4
  }, "<0.3")
  .from(".hero-1 img", {
    opacity: 0,
    scale: 0.85,
    x: 100,
    duration: 1,
    ease: "power3.out"
  }, "<0.2");

// ========= SERVICES SECTION =========
gsap.from(".services .card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "expo.out"
});

// ========= ABOUT ME SECTION =========
gsap.from(".about-me img", {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top 85%"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "power4.out"
});

gsap.from([".about-me h5", ".about-me h2", ".about-me p", ".about-me button"], {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top 80%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
});

// ========= TOOLS SECTION =========
gsap.from(".tools .tool-card", {
  scrollTrigger: {
    trigger: ".tools",
    start: "top 80%"
  },
  opacity: 0,
  scale: 0.5,
  rotateY: 30,
  stagger: 0.2,
  duration: 0.8,
  ease: "back.out(1.8)"
});

// ========= PROJECTS SECTION =========
gsap.from([".projects h5", ".projects h1"], {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 85%"
  },
  opacity: 0,
  y: 50,
  duration: 0.6,
  stagger: 0.2
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-grid",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  stagger: 0.3,
  duration: 1,
  ease: "expo.out"
});

// ========= EDUCATION SECTION =========
gsap.from(".education h1", {
  scrollTrigger: {
    trigger: ".education",
    start: "top 85%"
  },
  opacity: 0,
  y: 40,
  duration: 0.6
});

gsap.from(".qualification", {
  scrollTrigger: {
    trigger: ".education",
    start: "top 80%"
  },
  opacity: 0,
  x: -40,
  stagger: 0.3,
  duration: 0.7,
  ease: "power2.out"
});

// ========= FOOTER SECTION =========
gsap.from(".footer h1, .footer h3, .footer input, .footer button, .footer h2, .footer p", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%"
  },
  opacity: 0,
  y: 30,
  stagger: 0.2,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".social-media p", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 85%"
  },
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6
});

// ========= FINAL FOOTER =========
gsap.from(".final-footer p", {
  scrollTrigger: {
    trigger: ".final-footer",
    start: "top 90%"
  },
  opacity: 0,
  y: 20,
  stagger: 0.3,
  duration: 0.7
});



  const hamburger = document.getElementById('hamburger');
  const navItems = document.querySelector('.nav-items');
   const nav = document.querySelector('.nav');
  const logo = document.querySelector('.logo');
  const menu = document.querySelector('#hamburger');

  ['click', 'touchstart'].forEach(event => {
  hamburger.addEventListener(event, () => {

    navItems.classList.toggle('mobile-active');

    if (navItems.classList.contains('mobile-active')) {
      nav.style.height = '30vh';
      logo.style.display = 'none';
      menu.style.display = 'none';
    } else {
      nav.style.height = '50px'; // or your original height
      logo.style.display = 'block';
      menu.style.display = 'block';

    }
  });
  });

