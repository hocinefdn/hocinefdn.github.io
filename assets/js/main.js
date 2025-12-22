// ===============================================
// MAIN JAVASCRIPT FILE
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
  // Load data files dynamically
  loadDataFiles();
  
  // Initialize components after a short delay to ensure HTML is loaded
  setTimeout(() => {
    // Render dynamic content
    renderSkills(); 
    renderExperience();
    renderProjects();
    renderEducation();
    
    // Initialize components
    initNavbar();
    initHero();
    initContactForm();
    
    // Initialize utilities
    initAOS();
    initSmoothScroll();
    initBackToTop();
    initLazyLoading();
    
    // Console message
    console.log('%c👨‍💻 Portfolio by Hocine FEDANI', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cDéveloppeur Full Stack passionné', 'font-size: 14px; color: #64748b;');
    console.log('%c🔗 https://github.com/hocinefdn', 'font-size: 12px; color: #14b8a6;');
  }, 300);
});

// Load data files
function loadDataFiles() {
  const dataFiles = [
    'assets/data/personal.js',
    'assets/data/skills.js',
    'assets/data/experience.js',
    'assets/data/projects.js',
    'assets/data/education.js'
  ];

  return Promise.all(
    dataFiles.map(src => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    })
  );
}


// Add animation styles for notifications
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
