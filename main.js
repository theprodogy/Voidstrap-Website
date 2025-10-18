const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function countUp(element) {
  const target = parseFloat(element.getAttribute('data-target'));
  const isDecimal = target % 1 !== 0;
  const duration = 2500;
  const start = performance.now();

  function animate(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(2, -10 * progress);
    const value = eased * target;

    element.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
  }

  requestAnimationFrame(animate);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      countUp(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => statsObserver.observe(stat));

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.6)';
  }
});

if (!prefersReducedMotion && typeof gsap !== 'undefined') {

  gsap.from('.hero-heading .word', {
    y: 150,
    opacity: 0,
    duration: 1.4,
    stagger: 0.1,
    ease: 'power4.out',
    delay: 0.3
  });

  gsap.from('.hero-description', {
    y: 80,
    opacity: 0,
    duration: 1.3,
    delay: 0.7,
    ease: 'power3.out'
  });

  gsap.from('.hero-actions .btn-download', {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 1.1,
    delay: 1,
    ease: 'back.out(1.5)'
  });

  gsap.from('.hero-actions .btn-secondary', {
    y: 50,
    opacity: 0,
    duration: 1.1,
    delay: 1.15,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.hero-badges .badge', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    delay: 1.3,
    ease: 'power3.out'
  });

  gsap.from('.visual-card', {
    x: 100,
    opacity: 0,
    scale: 0.9,
    duration: 1.4,
    delay: 0.5,
    ease: 'power3.out'
  });

  gsap.from('.hero-logo', {
    scale: 0,
    rotation: 180,
    opacity: 0,
    duration: 1.2,
    delay: 1.2,
    ease: 'back.out(1.5)'
  });

  gsap.from('.visual-stat', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.8,
    ease: 'power3.out'
  });

  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-section',
      start: 'top 70%'
    },
    y: 80,
    opacity: 0,
    duration: 1.3,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.section-heading', {
    scrollTrigger: {
      trigger: '.features-section',
      start: 'top 75%'
    },
    y: 80,
    opacity: 0,
    duration: 1.3,
    ease: 'power3.out'
  });

  gsap.from('.feature-box', {
    scrollTrigger: {
      trigger: '.features-section',
      start: 'top 65%'
    },
    y: 100,
    opacity: 0,
    scale: 0.9,
    duration: 1.3,
    stagger: 0.18,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.feature-icon').forEach(icon => {
    gsap.from(icon, {
      scrollTrigger: {
        trigger: icon,
        start: 'top 80%'
      },
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 1.2,
      ease: 'back.out(2)'
    });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 85;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  });
});
