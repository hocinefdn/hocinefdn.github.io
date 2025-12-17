// ===============================================
// PORTFOLIO - JAVASCRIPT
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  initAOS();
  
  // Mobile menu functionality
  initMobileMenu();
  
  // Navbar scroll effect
  initNavbarScroll();
  
  // Smooth scrolling for anchor links
  initSmoothScroll();
  
  // Back to top button
  initBackToTop();
  
  // Contact form
  initContactForm();
  
  // Scroll indicator in hero
  initScrollIndicator();
});

// ===============================================
// INITIALIZE AOS (ANIMATE ON SCROLL)
// ===============================================
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      disable: window.innerWidth < 768 // Disable on mobile for performance
    });
  } else {
    // Fallback: Add simple fade-in for elements with data-aos
    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
  }
}

// ===============================================
// MOBILE MENU
// ===============================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
  
  if (!mobileMenuBtn || !mobileMenu) return;
  
  // Toggle menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on a link
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      mobileMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ===============================================
// NAVBAR SCROLL EFFECT
// ===============================================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ===============================================
// SMOOTH SCROLLING
// ===============================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===============================================
// BACK TO TOP BUTTON
// ===============================================
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===============================================
// CONTACT FORM
// ===============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Create mailto link (since this is a static site)
    const mailtoLink = `mailto:hocinefedani@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Message préparé ! Votre client email va s\'ouvrir.', 'success');
    
    // Reset form
    form.reset();
  });
}

// ===============================================
// SCROLL INDICATOR (HERO SECTION)
// ===============================================
function initScrollIndicator() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;
  
  scrollIndicator.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetPosition = aboutSection.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
}

// ===============================================
// NOTIFICATION SYSTEM
// ===============================================
function showNotification(message, type = 'info') {
  // Remove existing notification if any
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: ${type === 'success' ? '#10b981' : '#3b82f6'};
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

// ===============================================
// UTILITY: DEBOUNCE FUNCTION
// ===============================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ===============================================
// PERFORMANCE: LAZY LOAD IMAGES
// ===============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===============================================
// ADD ANIMATION STYLES
// ===============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .notification-content i {
    font-size: 20px;
  }
`;
document.head.appendChild(style);

// ===============================================
// CONSOLE MESSAGE
// ===============================================
console.log('%c👨‍💻 Portfolio by Hocine FEDANI', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cDéveloppeur Full Stack passionné', 'font-size: 14px; color: #64748b;');
console.log('%c🔗 https://github.com/hocinefdn', 'font-size: 12px; color: #14b8a6;');
