let translations = {};
let currentLanguage = localStorage.getItem("language") || "en";

// Load translations
async function loadTranslations() {
    try {
        const response = await fetch("js/translations.json");
        translations = await response.json();
        initializeLanguage();
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;

    // Translate all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        const text = getTranslation(key);

        // Handle HTML content (for strings with <br />)
        if (element.innerHTML !== text && text.includes("<")) {
            element.innerHTML = text;
        } else {
            element.textContent = text;
        }
    });

    // Translate placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");
        const text = getTranslation(key);
        element.placeholder = text;
    });

    // Update language toggle button
    updateLanguageToggle();
}

// Get translation string
function getTranslation(key) {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (let k of keys) {
        value = value[k];
        if (!value) return key;
    }

    return value;
}

// Update language toggle button appearance
function updateLanguageToggle() {
    const langButtons = document.querySelectorAll('[href="#"][data-lang-toggle="true"]');
    langButtons.forEach((btn) => {
        btn.textContent = currentLanguage === "en" ? "FI / EN" : "FI / EN";
        btn.style.fontWeight = "600";
    });
}

// Switch language
function switchLanguage(lang) {
    if (lang === "en" || lang === "fi") {
        currentLanguage = lang;
        localStorage.setItem("language", lang);
        initializeLanguage();
    }
}

// Toggle between languages
function toggleLanguage() {
    switchLanguage(currentLanguage === "en" ? "fi" : "en");
}

// Add event listeners to language toggle buttons
document.addEventListener("DOMContentLoaded", function () {
    loadTranslations();

    // Desktop language toggle
    const desktopLangBtn = document.querySelector(
        '.navbar-links li:last-child a'
    );
    if (desktopLangBtn) {
        desktopLangBtn.addEventListener("click", function (e) {
            e.preventDefault();
            toggleLanguage();
        });
        desktopLangBtn.style.cursor = "pointer";
    }

    // Mobile language toggle
    const mobileLangBtn = document.querySelector(
        '.mobile-nav-links li:last-child a'
    );
    if (mobileLangBtn) {
        mobileLangBtn.addEventListener("click", function (e) {
            e.preventDefault();
            toggleLanguage();
        });
        mobileLangBtn.style.cursor = "pointer";
    }
});
