/* ==========================================
   SAINIHISHTHA EDUCATION
   Professional EdTech Website
   script.js
   Author : Geetika Vashishtha
========================================== */

"use strict";

/* ==========================================
   WEBSITE LOADED
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Sainihishtha Education Loaded Successfully");

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show-menu");

        menuBtn.classList.toggle("active");

    });

}


/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show-menu");

        menuBtn.classList.remove("active");

    });

});


/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    }

    else {

        header.classList.remove("sticky");

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {

    const fileName = link.getAttribute("href").split("/").pop();

    if (fileName === currentPage) {

        link.classList.add("active");

    }

});


/* ==========================================
   NEWSLETTER FORM
========================================== */

const newsletterForm = document.querySelector(".newsletter form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = this.querySelector("input").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing!");

        this.reset();

    });

}


/* ==========================================
   HERO BUTTON EFFECT
========================================== */

const heroButtons = document.querySelectorAll(".hero .btn");

heroButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});


/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

const courseImages = document.querySelectorAll(".course-card img");

courseImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/* ==========================================
   END OF PART 1
========================================== */

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    });

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    item.addEventListener("click", () => {

        faqItems.forEach((faq) => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;

        ripple.style.top = `${e.clientY - rect.top}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   COURSE CARD HOVER
========================================== */

const courseCards = document.querySelectorAll(".course-card");

courseCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";

    });

});

/* ==========================================
   TEAM IMAGE EFFECT
========================================== */

const teamBanner = document.querySelector(".team-banner img");

if (teamBanner) {

    teamBanner.addEventListener("mouseenter", () => {

        teamBanner.style.transform = "scale(1.05)";

    });

    teamBanner.addEventListener("mouseleave", () => {

        teamBanner.style.transform = "scale(1)";

    });

}

/* ==========================================
   NEWSLETTER INPUT FOCUS
========================================== */

const newsletterInput = document.querySelector(".newsletter input");

if (newsletterInput) {

    newsletterInput.addEventListener("focus", () => {

        newsletterInput.style.boxShadow = "0 0 12px rgba(11,94,215,.35)";

    });

    newsletterInput.addEventListener("blur", () => {

        newsletterInput.style.boxShadow = "none";

    });

}

/* ==========================================
   CTA BUTTON EFFECT
========================================== */

const ctaButton = document.querySelector(".cta .btn");

if (ctaButton) {

    ctaButton.addEventListener("mouseenter", () => {

        ctaButton.style.transform = "scale(1.05)";

    });

    ctaButton.addEventListener("mouseleave", () => {

        ctaButton.style.transform = "scale(1)";

    });

}

/* ==========================================
   PAGE LOADER (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   END OF PART 2
========================================== */

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==========================================
   ACTIVE MENU ON SCROLL
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   CLOSE MENU WHEN CLICK OUTSIDE
========================================== */

document.addEventListener("click", (event) => {

    if (
        navbar &&
        menuBtn &&
        !navbar.contains(event.target) &&
        !menuBtn.contains(event.target)
    ) {

        navbar.classList.remove("show-menu");
        menuBtn.classList.remove("active");

    }

});

/* ==========================================
   IMAGE LAZY LOADING
========================================== */

const lazyImages = document.querySelectorAll("img");

const imageObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const img = entry.target;

            img.classList.add("loaded");

            observer.unobserve(img);

        }

    });

});

lazyImages.forEach((img) => {

    imageObserver.observe(img);

});

/* ==========================================
   DISABLE EMPTY LINKS
========================================== */

document.querySelectorAll('a[href="#"]').forEach((link) => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

    });

});

/* ==========================================
   WINDOW RESIZE
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        navbar.classList.remove("show-menu");
        menuBtn.classList.remove("active");

    }

});

/* ==========================================
   COPYRIGHT YEAR
========================================== */

const yearElement = document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("======================================");
console.log(" SAINIHISHTHA EDUCATION ");
console.log(" Professional EdTech Website ");
console.log(" Developed by Geetika Vashishtha ");
console.log("======================================");

/* ==========================================
   WEBSITE INITIALIZATION
========================================== */

window.addEventListener("load", () => {

    revealOnScroll();

    console.log("Website Loaded Successfully.");

});

/* ==========================================
   END OF SCRIPT.JS
========================================== */