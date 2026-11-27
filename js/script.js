
// =========================================
// 1. MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");


// Check that the navigation elements exist
if (menuToggle && navLinks) {

    // OPEN AND CLOSE THE NAVIGATION MENU
    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isExpanded);

        menuToggle.setAttribute(
            "aria-label",
            isExpanded ? "Close navigation menu" : "Open navigation menu"
        );

    });


    // CLOSE THE MENU AFTER CLICKING A NAVIGATION LINK
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


    // CLOSE THE MENU WHEN ESCAPE IS PRESSED
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
