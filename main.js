document.addEventListener('DOMContentLoaded', () => {
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

    // Simple mobile menu toggle logic could go here
});
