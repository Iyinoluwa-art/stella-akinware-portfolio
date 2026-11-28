
// =========================================
// STELLA AKINWARE PORTFOLIO
// COMPLETE MAIN JAVASCRIPT
// =========================================


// =========================================
// 1. MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Check that navigation elements exist
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
// 2. LIGHT AND DARK MODE
// =========================================


// SELECT THE THEME ELEMENTS

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = document.querySelector(".theme-icon");

const themeText = document.querySelector(".theme-text");

const browserThemeColor = document.getElementById(
    "browser-theme-color"
);


// THEME COLOURS FOR THE BROWSER

const themeColors = {
    dark: "#101522",
    light: "#F3F6FF"
};


// =========================================
// 3. APPLY SELECTED THEME
// =========================================

function applyTheme(theme) {

    // UPDATE HTML THEME ATTRIBUTE
    document.documentElement.setAttribute(
        "data-theme",
        theme
    );


    // UPDATE THE THEME BUTTON
    if (themeToggle && themeIcon && themeText) {

        if (theme === "dark") {

            themeIcon.textContent = "☀";

            themeText.textContent = "Light Mode";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light mode"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to light mode"
            );

        } else {

            themeIcon.textContent = "☾";

            themeText.textContent = "Dark Mode";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark mode"
            );

            themeToggle.setAttribute(
                "title",
                "Switch to dark mode"
            );

        }

    }


    // UPDATE BROWSER THEME COLOUR
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


// Dark mode is the default theme.

let savedTheme = "dark";


// CHECK WHETHER A THEME WAS PREVIOUSLY SAVED
try {

    const storedTheme = localStorage.getItem(
        "stella-portfolio-theme"
    );

    if (storedTheme === "light" || storedTheme === "dark") {

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

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        // GET THE CURRENT THEME
        const currentTheme = document.documentElement
            .getAttribute("data-theme");


        // DETERMINE THE NEW THEME
        const newTheme = currentTheme === "dark"
            ? "light"
            : "dark";


        // APPLY THE NEW THEME
        applyTheme(newTheme);


        // SAVE THE VISITOR'S PREFERENCE
        try {

            localStorage.setItem(
                "stella-portfolio-theme",
                newTheme
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
