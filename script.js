document.addEventListener('DOMContentLoaded', () => {

  // --- MOBILE MENU TOGGLE ---
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.querySelector('nav');
  if (menuBtn && navMenu) {
      menuBtn.addEventListener('click', () => {
          navMenu.classList.toggle('nav-open');
      });
  }

  // --- FILM GRAIN OVERLAY ---
  // Create grain element if it doesn't exist
  if (!document.querySelector('.film-grain')) {
    const grain = document.createElement('div');
    grain.className = 'film-grain';
    document.body.appendChild(grain);
  }

  // --- CUSTOM CURSOR TRAIL ---
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let isMoving = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    });

    const updateRing = () => {
      if (isMoving) {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        cursorRing.style.transform = `translate(${ringX - 17.5}px, ${ringY - 17.5}px)`;
      }
      requestAnimationFrame(updateRing);
    };
    requestAnimationFrame(updateRing);

    // Expand ring on interactive elements hover
    const interactives = document.querySelectorAll('a, button, .btn, .movie-block, .card, .partner-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('expand');
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('expand');
      });
    });
  }

  // --- NAVBAR SCROLL EFFECT ---
  const header = document.querySelector('header');
  const scrollOffset = 50;

  const handleNavbarScroll = () => {
    if (header) {
      if (window.scrollY > scrollOffset) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  };

  window.addEventListener('scroll', handleNavbarScroll);
  handleNavbarScroll(); // Initial check

  // --- SCROLL TO TOP BUTTON ---
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'block';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });

    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- FADE IN / SCROLL REVEAL ANIMATIONS ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Unobserve once triggered to lock animation
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // --- PARALLAX EFFECT FOR HERO SECTION ---
  const heroBg = document.getElementById('hero-bg');
  const heroImage = document.querySelector('.hero-image');
  const heroContent = document.querySelector('.hero-content');
  
  if (heroBg || heroImage || heroContent) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.pageYOffset;
      if (scrollPos <= window.innerHeight) {
        // Multi-layer parallax
        if (heroBg) {
          heroBg.style.transform = `scale(1.15) translateY(${scrollPos * 0.35}px)`;
        }
        if (heroImage) {
          // Person moves slightly down, creating depth against the background
          heroImage.style.transform = `translateY(${scrollPos * 0.15}px)`;
        }
        if (heroContent) {
          // Text moves up slightly or stays still relatively
          heroContent.style.transform = `translateY(${scrollPos * 0.25}px)`;
        }
      }
    });
  }

  // --- SUBTLE PARALLAX FOR FILMOGRAPHY IMAGES ---
  const parallaxImgs = document.querySelectorAll('.parallax-img');
  const handleParallaxImgs = () => {
    const windowHeight = window.innerHeight;
    parallaxImgs.forEach(img => {
      const parent = img.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate relative position of element in viewport
        const relativeScroll = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Translate image within container
        const translateY = (relativeScroll - 0.5) * 50; // shift range [-25px, 25px]
        img.style.transform = `translateY(${translateY}px) scale(1.1)`;
      }
    });
  };

  if (parallaxImgs.length > 0) {
    window.addEventListener('scroll', handleParallaxImgs);
    handleParallaxImgs(); // Initial position setup
  }

  // --- ACTIVE SECTION LINK HIGHLIGHTING & SMOOTH SCROLL ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  const highlightNav = () => {
    let scrollY = window.pageYOffset;

    // Do not activate any link when at the very top of the page
    if (scrollY === 0) {
      navLinks.forEach(link => link.classList.remove('nav-active'));
      return;
    }
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // offset for navbar
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('nav-active');
          const href = link.getAttribute('href');
          if (href === `#${sectionId}` || href === `index.html#${sectionId}`) {
            link.classList.add('nav-active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // Smooth scroll logic for standard links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // If same-page smooth scroll link
      if (href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
// --- HERO STAT COUNTER ANIMATION ---
const stats = document.querySelectorAll('.stats .stat h2');
let statsAnimated = false;
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsAnimated) {
      stats.forEach(el => {
        const targetText = el.textContent.trim();
        const targetNumber = parseInt(targetText.replace('+', '')) || 0;
        const duration = 2500; // 2.5 seconds
        const start = performance.now();
        const step = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = Math.floor(progress * targetNumber);
          el.textContent = current + '+';
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = targetNumber + '+';
          }
        };
        requestAnimationFrame(step);
      });
      statsAnimated = true;
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
const statsContainer = document.querySelector('.stats');
if (statsContainer) {
  statsObserver.observe(statsContainer);
}
// --- LIGHTBOX GALLERY ---
const galleryImages = document.querySelectorAll('.gallery-grid img, .gallery-large img, .gallery-small img, .gallery-row img, .gallery-row-2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
// Counter element
const lightboxCounter = document.createElement('div');
lightboxCounter.className = 'lightbox-counter';
lightbox.appendChild(lightboxCounter);
let currentIndex = 0;
function openLightbox(index) {
  currentIndex = index;
  showImage(currentIndex);
  lightbox.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('is-active');
  lightbox.classList.add('is-closing');
  setTimeout(() => {
    lightbox.classList.remove('is-closing');
    document.body.style.overflow = '';
  }, 300);
}
function showImage(index) {
  const total = galleryImages.length;
  const img = galleryImages[index];
  lightboxImg.src = img.src;
  lightboxCounter.textContent = `${index + 1} / ${total}`;
}
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}
function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}
// Click thumbnails
galleryImages.forEach((img, i) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => openLightbox(i));
});
// Controls
lightboxClose.addEventListener('click', (e) => { e.stopPropagation(); closeLightbox(); });
lightboxPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
lightboxNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-active')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') nextImage();
  else if (e.key === 'ArrowLeft') prevImage();
});
// Swipe support
let touchStartX = 0;
let touchEndX = 0;
lightbox.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
lightbox.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchEndX < touchStartX - 50) nextImage();
  if (touchEndX > touchStartX + 50) prevImage();
});
});
