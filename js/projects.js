// Project data
const projects = [
    {
        id: 1,
        title: 'Machine Learning Model for Stock Prediction',
        description: 'Developed a deep learning model using LSTM networks to predict stock prices with 85% accuracy.',
        category: 'ml',
        technologies: ['Python', 'TensorFlow', 'LSTM', 'Pandas'],
        image: 'assets/images/projects/stock-prediction.jpg',
        github: 'https://github.com/username/stock-prediction',
        demo: 'https://stock-prediction-demo.com'
    },
    {
        id: 2,
        title: 'NLP-based Sentiment Analysis',
        description: 'Built a sentiment analysis system using BERT for analyzing customer reviews and feedback.',
        category: 'nlp',
        technologies: ['Python', 'BERT', 'PyTorch', 'NLTK'],
        image: 'assets/images/projects/sentiment-analysis.jpg',
        github: 'https://github.com/username/sentiment-analysis',
        demo: 'https://sentiment-analysis-demo.com'
    },
    {
        id: 3,
        title: 'Interactive Data Visualization Dashboard',
        description: 'Created an interactive dashboard for visualizing complex datasets using D3.js and React.',
        category: 'viz',
        technologies: ['React', 'D3.js', 'TypeScript', 'Chart.js'],
        image: 'assets/images/projects/data-viz.jpg',
        github: 'https://github.com/username/data-viz',
        demo: 'https://data-viz-demo.com'
    },
    {
        id: 4,
        title: 'Recommendation System',
        description: 'Implemented a collaborative filtering recommendation system for an e-commerce platform.',
        category: 'ml',
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
        image: 'assets/images/projects/recommendation.jpg',
        github: 'https://github.com/username/recommendation-system',
        demo: 'https://recommendation-demo.com'
    }
];

// Render projects
function renderProjects(filter = 'all') {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);
    
    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-overlay">
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Add 3D hover effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
    
    return card;
}

// Initialize projects
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Add filter button click handlers
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
});

// Project modal
function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h2>${project.title}</h2>
            </div>
            <div class="modal-body">
                <img src="${project.image}" alt="${project.title}">
                <div class="modal-details">
                    <p>${project.description}</p>
                    <div class="modal-technologies">
                        <h3>Technologies Used:</h3>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-links">
                        <a href="${project.github}" target="_blank" class="btn primary-btn">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        <a href="${project.demo}" target="_blank" class="btn secondary-btn">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation
    gsap.from(modal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out'
    });
    
    // Close modal
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', () => {
        gsap.to(modal, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                modal.remove();
            }
        });
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            gsap.to(modal, {
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    modal.remove();
                }
            });
        }
    });
}

// Add click handler to project cards
document.addEventListener('click', (e) => {
    const projectCard = e.target.closest('.project-card');
    if (projectCard) {
        const projectId = projectCard.getAttribute('data-id');
        const project = projects.find(p => p.id === parseInt(projectId));
        if (project) {
            createProjectModal(project);
        }
    }
}); 