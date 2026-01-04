// Theme Management
const initTheme = () => {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleText(theme);
};

const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
};

const updateToggleText = (theme) => {
    const toggleText = document.querySelector('.theme-toggle .mode-text');
    if (toggleText) {
        toggleText.textContent = theme === 'dark' ? 'BRIGHT' : 'DARK';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Theme toggle listener
    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    // Reveal animation observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach((el) => {
        revealObserver.observe(el);
    });

    // Navigation scroll effect
    const reveal = () => {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 50) {
                nav.style.padding = '12px 0';
            } else {
                nav.style.padding = '20px 0';
            }
        }
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run on load
});
