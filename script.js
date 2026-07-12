// --- Ultra Premium Theme Switch Engine ---
const desktopBtn = document.getElementById('desktop-theme-toggle');
const mobileBtn = document.getElementById('mobile-theme-toggle');
const htmlEl = document.documentElement;

function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcons(theme);
}

function toggleTheme() {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateToggleIcons(theme) {
    const iconClass = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
    desktopBtn.innerHTML = `<i class="${iconClass}"></i>`;
    mobileBtn.innerHTML = `<i class="${iconClass}"></i>`;
}

// Event Listeners for Theme Toggle Buttons
if (desktopBtn) desktopBtn.addEventListener('click', toggleTheme);
if (mobileBtn) mobileBtn.addEventListener('click', toggleTheme);

// Initialize application theme state
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);


// --- Active State Synchronization Logic for Mobile Bottom Bar ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.premium-bottom-bar .bottom-nav-link');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Checks if the user scroll viewport is within the current section range
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


// --- Premium Snowfall Generation Engine ---
function createSnowflake() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // 1. பனித்துளியின் அளவை சீரற்றதாக மாற்றுதல் (Random Size between 2px to 6px)
    const size = Math.random() * 4 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;

    // 2. திரையின் அகலத்தில் சீரற்ற இடத்தில் பனித்துளி தோன்றுதல் (Random Left Position)
    snowflake.style.left = `${Math.random() * 100}vw`;

    // 3. பனித்துளி விழும் வேகம் (Random Duration between 5s to 10s)
    const duration = Math.random() * 5 + 5;
    snowflake.style.animationDuration = `${duration}s`;

    // 4. பனித்துளி தோன்றுவதற்கான கால தாமதம் (Random Delay)
    snowflake.style.animationDelay = `${Math.random() * 5}s`;

    snowContainer.appendChild(snowflake);

    // அனிமேஷன் முடிந்ததும் மெமரி குறையாமல் இருக்க பனித்துளியை நீக்குதல்
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// குறிப்பிட்ட இடைவெளியில் தொடர்ந்து பனித்துளிகளை உருவாக்குதல்
setInterval(createSnowflake, 150);


// --- 🚀 NEW: Refresh Fix Engine (எப்போதும் டாப் ஹோம் செக்ஷனில் வைக்க) ---
if (history.scrollRestoration) {
    // பிரௌசர் அதன் பழைய ஸ்க்ரோல் பொசிஷனை ஞாபகம் வைப்பதைத் தடுத்தல்
    history.scrollRestoration = 'manual';
}

window.addEventListener('DOMContentLoaded', () => {
    // பக்கம் லோட் ஆனதும் உடனடியாக ஸ்க்ரோலை மேல் பகுதிக்குக் கொண்டு செல்லுதல்
    window.scrollTo(0, 0);
    
    // ஒருவேளை URL-ல் #get-in-touch போன்ற ஹேஷ்டேக் இருந்தால் அதை நீக்குதல்
    if (window.location.hash) {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
});
