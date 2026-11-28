
// =========================================
// STELLA AKINWARE PORTFOLIO
// COMPLETE MAIN JAVASCRIPT
// =========================================


// =========================================
// 1. MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// CHECK THAT NAVIGATION ELEMENTS EXIST
if (menuToggle && navLinks) {

    // OPEN AND CLOSE THE NAVIGATION MENU
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.setAttribute(
            "aria-label",
            isExpanded
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    // CLOSE MENU AFTER CLICKING A NAVIGATION LINK
    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });


    // CLOSE MENU WHEN ESCAPE IS PRESSED
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}


// =========================================
// 2. THEME ELEMENTS
// =========================================


// SELECT THE THEME DROPDOWN
const themeSelect = document.getElementById("theme-select");


// SELECT THE BROWSER THEME COLOUR META TAG
const browserThemeColor = document.getElementById(
    "browser-theme-color"
);


// THEME COLOURS FOR THE BROWSER
const themeColors = {

    dark: "#101522",

    light: "#F3F6FF",

    multi: "#171329"

};


// AVAILABLE WEBSITE THEMES
const availableThemes = ["dark", "light", "multi"];


// LOCAL STORAGE KEY
const themeStorageKey = "stella-portfolio-theme";


// =========================================
// 3. APPLY SELECTED THEME
// =========================================

function applyTheme(theme) {

    // VALIDATE THE SELECTED THEME
    if (!availableThemes.includes(theme)) {

        theme = "dark";

    }


    // UPDATE THE HTML THEME ATTRIBUTE
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );


    // UPDATE THE THEME SELECTOR
    if (themeSelect) {

        themeSelect.value = theme;

    }


    // UPDATE THE BROWSER THEME COLOUR
    if (browserThemeColor) {

        browserThemeColor.setAttribute(
            "content",
            themeColors[theme]
        );

    }

}


// =========================================
// 4. LOAD SAVED THEME
// =========================================


// DARK MODE IS THE DEFAULT THEME
let savedTheme = "dark";


// CHECK WHETHER A THEME WAS PREVIOUSLY SAVED
try {

    const storedTheme = localStorage.getItem(
        themeStorageKey
    );

    if (availableThemes.includes(storedTheme)) {

        savedTheme = storedTheme;

    }

} catch (error) {

    console.warn(
        "Theme preference could not be retrieved.",
        error
    );

}


// APPLY THE INITIAL THEME
applyTheme(savedTheme);


// =========================================
// 5. THEME SWITCHING FUNCTIONALITY
// =========================================


// CHECK THAT THE THEME SELECTOR EXISTS
if (themeSelect) {

    themeSelect.addEventListener("change", function () {

        // GET THE SELECTED THEME
        const selectedTheme = themeSelect.value;


        // APPLY THE SELECTED THEME
        applyTheme(selectedTheme);


        // SAVE THE VISITOR'S PREFERENCE
        try {

            localStorage.setItem(
                themeStorageKey,
                selectedTheme
            );

        } catch (error) {

            console.warn(
                "Theme preference could not be saved.",
                error
            );

        }

    });

}


// =========================================
// END OF MAIN JAVASCRIPT
// =========================================
