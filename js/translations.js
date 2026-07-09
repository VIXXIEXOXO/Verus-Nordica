let translations = {};
const supportedLanguages = ["en", "fi"];
let currentLanguage = localStorage.getItem("language");
if (!supportedLanguages.includes(currentLanguage)) {
    currentLanguage = "en";
}

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
    document.querySelectorAll('[data-lang-toggle="true"]').forEach((btn) => {
        const lang = btn.getAttribute("data-lang");
        const isActive = lang === currentLanguage;
        btn.classList.toggle("active", isActive);
        btn.classList.toggle("inactive", !isActive);
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

// Add event listeners to language toggle buttons
document.addEventListener("DOMContentLoaded", function () {
    loadTranslations();

    document.querySelectorAll('[data-lang-toggle="true"]').forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const lang = btn.getAttribute("data-lang");
            if (lang) {
                switchLanguage(lang);
            }
        });
        btn.style.cursor = "pointer";
    });
});
