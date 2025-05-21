// CRT Display Effects
document.addEventListener('DOMContentLoaded', function () {
    // Add scanlines animation
    const scanlines = document.querySelector('.scanlines');
    if (scanlines) {
        scanlines.classList.add('animated');
    }

    // Add flicker effect
    const crt = document.querySelector('.crt');
    if (crt) {
        setInterval(() => {
            const flicker = Math.random() * 0.1;
            crt.style.opacity = 0.9 + flicker;
        }, 50);
    }

    // Add cursor blink effect
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});
