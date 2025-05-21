// CRT effect JS: flicker and glow
document.addEventListener('DOMContentLoaded', () => {
    const crtContent = document.querySelector('.crt .content');
    const scanlines = document.querySelector('.scanlines');

    if (!crtContent || !scanlines) return;

    // Add flicker effect
    setInterval(() => {
        crtContent.style.opacity = 0.97 + Math.random() * 0.03;
    }, 60);

    // Add subtle green glow
    crtContent.style.boxShadow = '0 0 20px 2px #00ff00, 0 0 40px 4px #00ff0044';

    // Add scanlines animation
    scanlines.classList.add('animated');
}); 