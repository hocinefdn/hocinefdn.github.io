// ===============================================
// HERO COMPONENT SCRIPT
// ===============================================

function initHero() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  
  if (scrollIndicator) {
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
}
