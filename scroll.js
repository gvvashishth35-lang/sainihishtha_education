/* ==========================================
   SAINIHISHTHA EDUCATION
   scroll.js
   Professional Scroll Effects
========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       SCROLL REVEAL
    ========================================== */

    const revealElements = document.querySelectorAll(".reveal");

    function reveal() {

        const windowHeight = window.innerHeight;

        revealElements.forEach((element) => {

            const top = element.getBoundingClientRect().top;

            const visible = 120;

            if (top < windowHeight - visible) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================================
       HEADER SHADOW
    ========================================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.12)";

        }

        else {

            header.style.boxShadow = "none";

        }

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const scrollTop = document.querySelector(".scroll-top");

    if (scrollTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 400) {

                scrollTop.classList.add("show");

            }

            else {

                scrollTop.classList.remove("show");

            }

        });

        scrollTop.addEventListener("click", () => {

            window.scrollTo({

                top:0,
                behavior:"smooth"

            });

        });

    }

    /* ==========================================
       ACTIVE SECTION
    ========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ==========================================
       PARALLAX HERO
    ========================================== */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {

        if (!hero) return;

        hero.style.backgroundPositionY =
            window.scrollY * 0.4 + "px";

    });

    /* ==========================================
       END
    ========================================== */

});