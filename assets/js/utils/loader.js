// ===============================================
// HTML SECTIONS LOADER
// ===============================================

const sections = {
  navbar: `
    <nav class="navbar" id="navbar">
      <div class="container nav-container">
        <a href="#home" class="logo" aria-label="Retour à l'accueil">HF</a>
        
        <div class="nav-links" id="navLinks">
          <a href="#about">À propos</a>
          <a href="#skills">Compétences</a>
          <a href="#experience">Expérience</a>
          <a href="#projects">Projets</a>
          <a href="#education">Formation</a>
          <a href="#contact" class="btn-contact">Contact</a>
        </div>

        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menu de navigation" aria-expanded="false">
          <span class="hamburger"></span>
          <span class="hamburger"></span>
          <span class="hamburger"></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-content">
          <a href="#about" class="mobile-menu-link">À propos</a>
          <a href="#skills" class="mobile-menu-link">Compétences</a>
          <a href="#experience" class="mobile-menu-link">Expérience</a>
          <a href="#projects" class="mobile-menu-link">Projets</a>
          <a href="#education" class="mobile-menu-link">Formation</a>
          <a href="#contact" class="mobile-menu-link">Contact</a>
        </div>
      </div>
    </nav>
  `,

  hero: `
    <header class="hero" id="home">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-badge" data-aos="fade-down">Disponible pour de nouvelles opportunités</div>
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
          Bonjour, je suis <span class="gradient-text">Hocine FEDANI</span>
        </h1>
        <h2 class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Développeur Full Stack</h2>
        <p class="hero-description" data-aos="fade-up" data-aos-delay="300">
          Je crée des applications web modernes et performantes avec
          PHP/Laravel, Java/Spring Boot/Quarkus et Angular/Vue.js
        </p>
        <div class="hero-buttons" data-aos="fade-up" data-aos-delay="400">
          <a href="#projects" class="btn btn-primary">
            <i class="fas fa-rocket"></i> Voir mes projets
          </a>
          <a href="#contact" class="btn btn-secondary">
            <i class="fas fa-envelope"></i> Me contacter
          </a>
        </div>
        <div class="social-links" data-aos="fade-up" data-aos-delay="500">
          <a href="mailto:hocinefedani@gmail.com" class="social-icon" title="Email" aria-label="Envoyer un email">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://github.com/hocinefdn" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub" aria-label="Voir mon profil GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/hocine-fedani" target="_blank" rel="noopener noreferrer" class="social-icon" title="LinkedIn" aria-label="Voir mon profil LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <p class="location" data-aos="fade-up" data-aos-delay="600">
          <i class="fas fa-map-marker-alt"></i> Sartrouville, Île-de-France
        </p>
      </div>
      <div class="scroll-indicator">
        <i class="fas fa-chevron-down"></i>
      </div>
    </header>
  `,

  about: `
    <section id="about" class="section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Qui suis-je ?</span>
          <h3 class="section-title">À propos de moi</h3>
        </div>
        <div class="about-content">
          <div class="about-text" data-aos="fade-up" data-aos-delay="100">
            <p class="lead">
              Développeur Full Stack titulaire d'un master en ingénierie des
              systèmes d'information, je combine expertise technique et passion
              pour l'innovation.
            </p>
            <p>
              Je conçois et maintiens des
              <strong>architectures robustes</strong> et des
              <strong>API REST sécurisées</strong>. Passionné par l'agilité, je
              maîtrise la migration d'applications (Legacy PHP vers
              Java/Quarkus) et le développement de nouvelles fonctionnalités
              full stack.
            </p>
            <div class="about-stats">
              <div class="stat" data-aos="zoom-in" data-aos-delay="200">
                <div class="stat-number">3+</div>
                <div class="stat-label">Années d'expérience</div>
              </div>
              <div class="stat" data-aos="zoom-in" data-aos-delay="300">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projets réalisés</div>
              </div>
              <div class="stat" data-aos="zoom-in" data-aos-delay="400">
                <div class="stat-number">5+</div>
                <div class="stat-label">Technologies maîtrisées</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  skills: `
    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Mes expertises</span>
          <h3 class="section-title">Compétences Techniques</h3>
        </div>
        <div class="skills-grid" id="skillsGrid"></div>
      </div>
    </section>
  `,

  experience: `
    <section id="experience" class="section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Mon parcours</span>
          <h3 class="section-title">Expériences Professionnelles</h3>
        </div>
        <div class="timeline" id="timeline"></div>
      </div>
    </section>
  `,

  projects: `
    <section id="projects" class="section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Réalisations</span>
          <h3 class="section-title">Projets Personnels</h3>
        </div>
        <div class="projects-grid" id="projectsGrid"></div>
      </div>
    </section>
  `,

  education: `
    <section id="education" class="section">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Académique</span>
          <h3 class="section-title">Formation</h3>
        </div>
        <div class="education-grid" id="educationGrid"></div>
      </div>
    </section>
  `,

  contact: `
    <section id="contact" class="section section-alt">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-label">Restons connectés</span>
          <h3 class="section-title">Contactez-moi</h3>
        </div>
        <div class="contact-content">
          <p class="contact-text" data-aos="fade-up" data-aos-delay="100">
            Je suis toujours intéressé par de nouveaux défis et opportunités.
            N'hésitez pas à me contacter !
          </p>
          <div class="contact-methods">
            <a href="mailto:hocinefedani@gmail.com" class="contact-card" data-aos="zoom-in" data-aos-delay="200">
              <i class="fas fa-envelope"></i>
              <div>
                <h5>Email</h5>
                <p>hocinefedani@gmail.com</p>
              </div>
            </a>
            <a href="https://github.com/hocinefdn" target="_blank" rel="noopener noreferrer" class="contact-card" data-aos="zoom-in" data-aos-delay="300">
              <i class="fab fa-github"></i>
              <div>
                <h5>GitHub</h5>
                <p>@hocinefdn</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/hocine-fedani" target="_blank" rel="noopener noreferrer" class="contact-card" data-aos="zoom-in" data-aos-delay="400">
              <i class="fab fa-linkedin"></i>
              <div>
                <h5>LinkedIn</h5>
                <p>hocine-fedani</p>
              </div>
            </a>
          </div>

          <div class="contact-form-container" data-aos="fade-up" data-aos-delay="500">
            <form class="contact-form" id="contactForm">
              <div class="form-group">
                <label for="name">Nom complet</label>
                <input type="text" id="name" name="name" required placeholder="Votre nom" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="votre@email.com" />
              </div>
              <div class="form-group">
                <label for="subject">Sujet</label>
                <input type="text" id="subject" name="subject" required placeholder="Sujet de votre message" />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-submit">
                <i class="fas fa-paper-plane"></i> Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,

  footer: `
    <footer class="footer">
      <div class="container">
        <p>
          © 2024 Hocine FEDANI - Développé avec <i class="fas fa-heart"></i> et
          <i class="fas fa-code"></i>
        </p>
        <p class="footer-subtitle">Hébergé sur GitHub Pages</p>
      </div>
    </footer>
  `
};

// Load all sections
function loadSections() {
  Object.keys(sections).forEach(key => {
    const container = document.getElementById(`${key}-container`);
    if (container) {
      container.innerHTML = sections[key];
    }
  });
}

// Execute on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadSections);
} else {
  loadSections();
}
