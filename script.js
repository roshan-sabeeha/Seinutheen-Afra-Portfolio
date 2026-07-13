// --- 🚀 Premium Theme Switch Engine ---
const desktopBtn = document.getElementById('desktop-theme-toggle');
const mobileBtn = document.getElementById('mobile-theme-toggle');
const htmlEl = document.documentElement;

function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcons(theme);
}

function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateToggleIcons(theme) {
    const iconClass = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    if (desktopBtn) desktopBtn.innerHTML = `<i class="${iconClass}"></i>`;
    if (mobileBtn) mobileBtn.innerHTML = `<i class="${iconClass}"></i>`;
}

// Event Listeners for Theme Toggle Buttons
if (desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);

// Initialize application theme state
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);


// --- 📱 Active State Synchronization Logic for Mobile Bottom Bar ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.premium-bottom-bar .bottom-nav-link');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 260)) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(currentSectionId)) {
            item.classList.add('active');
        }
    });
});


// --- ❄️ Premium Snowfall Generation Engine ---
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    const size = Math.random() * 4 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;

    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}
setInterval(createSnowflake, 150);


// --- 🔄 Refresh Fix Engine (Scroll to Top) ---
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
});


// --- 🚀 Premium Certificate Viewer Lightbox Logic ---
function viewCertificate(imageSrc, titleText) {
    const certImage = document.getElementById('certModalImage');
    const certTitle = document.getElementById('certModalTitle');
    
    if (certImage && certTitle) {
        certImage.src = imageSrc;
        certTitle.innerText = titleText;
    }
}
