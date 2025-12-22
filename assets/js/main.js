// ===============================================
// MAIN JAVASCRIPT FILE
// ===============================================

document.addEventListener("sections:loaded", async () => {
  try {
    // 1️⃣ Charger les données
    await loadDataFiles();

    // 2️⃣ Render (HTML + DATA prêts)
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();

    // 3️⃣ Init composants
    initNavbar();
    initHero();
    initContactForm();

    // 4️⃣ Utils
    initSmoothScroll();
    initBackToTop();
    initLazyLoading();

    // 5️⃣ AOS TOUJOURS À LA FIN
    if (window.AOS) {
      AOS.init({ once: true });
      AOS.refresh();
    }

    console.log('%c👨‍💻 Portfolio by Hocine FEDANI', 'font-size: 20px; font-weight: bold; color: #6366f1;');
  } catch (e) {
    console.error("Erreur chargement data", e);
  }
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
