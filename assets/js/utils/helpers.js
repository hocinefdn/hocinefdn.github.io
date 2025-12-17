// ===============================================
// HELPER UTILITIES
// ===============================================

// Render skills dynamically
function renderSkills() {
  if (typeof skillsData === "undefined") return;

  const container = document.getElementById("skillsGrid");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (skill, index) => `
    <div class="skill-card" data-aos="fade-up" data-aos-delay="${
      (index + 1) * 100
    }">
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <h4>${skill.title}</h4>
      <div class="skill-tags">
        ${skill.tags
          .map(
            (tag) =>
              `
              <span class="tag">
              <i class="${tag.icon}"></i> ${tag.name}
              </span>
              `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

// Render experience timeline dynamically
function renderExperience() {
  if (typeof experienceData === "undefined") return;

  const container = document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = experienceData
    .map(
      (exp, index) => `
    <div class="timeline-item" data-aos="fade-right" data-aos-delay="${
      (index + 1) * 100
    }">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="job-header">
          <div>
            <h4>${exp.title}</h4>
            <p class="company">
              <i class="fas fa-building"></i> ${exp.company}
            </p>
          </div>
          <span class="job-date">
            <i class="far fa-calendar"></i> ${exp.date}
          </span>
        </div>
        <ul class="job-highlights">
          ${exp.highlights
            .map(
              (highlight) => `
            <li>
              <i class="fas fa-check-circle"></i>
              ${highlight}
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
}

// Render projects dynamically
function renderProjects() {
  if (typeof projectsData === "undefined") return;

  const container = document.getElementById("projectsGrid");
  if (!container) return;

  container.innerHTML = projectsData
    .map(
      (project, index) => `
    <div class="project-card" data-aos="fade-up" data-aos-delay="${
      (index + 1) * 100
    }">
      <div class="project-image" style="background: ${project.imageGradient};">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </div>
      <div class="project-content">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags
            .map((tag) => `<span class="tag">${tag}</span>`)
            .join("")}
        </div>
        <div class="project-links">
          ${project.links
            .map(
              (link) => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" 
               class="project-link ${
                 link.type === "secondary" ? "project-link-secondary" : ""
               }">
              <i class="${link.icon}"></i> ${
                link.label
              } <i class="fas fa-arrow-right"></i>
            </a>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// Render education dynamically
function renderEducation() {
  if (typeof educationData === "undefined") return;

  const container = document.getElementById("educationGrid");
  if (!container) return;

  container.innerHTML = educationData
    .map(
      (edu, index) => `
    <div class="education-card" data-aos="fade-up" data-aos-delay="${
      (index + 1) * 100
    }">
      <div class="education-icon">
        <i class="fas fa-graduation-cap"></i>
      </div>
      <div class="education-content">
        <h4>${edu.degree}</h4>
        <p class="education-school">
          <i class="fas fa-university"></i> ${edu.school}
        </p>
        <p class="education-date">
          <i class="far fa-calendar"></i> ${edu.date}
        </p>
      </div>
    </div>
  `
    )
    .join("");
}

// Lazy load images
function initLazyLoading() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

// Debounce function
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
