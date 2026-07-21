/* ==========================================
   SAINIHISHTHA EDUCATION
   slider.js
========================================== */

"use strict";

/* ==========================================
   STUDENT REVIEW SLIDER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".review-slider");

    if (!slider) return;

    const slides = document.querySelectorAll(".review-card");

    const nextBtn = document.querySelector(".next-btn");

    const prevBtn = document.querySelector(".prev-btn");

    let currentSlide = 0;

    let autoSlide;

    /* ===========================
       SHOW SLIDE
    =========================== */

    function showSlide(index) {

        if (index >= slides.length) {

            currentSlide = 0;

        }

        else if (index < 0) {

            currentSlide = slides.length - 1;

        }

        else {

            currentSlide = index;

        }

        slider.style.transform =
            `translateX(-${currentSlide * 100}%)`;

    }

    /* ===========================
       NEXT
    =========================== */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }

    /* ===========================
       PREVIOUS
    =========================== */

    function prevSlide() {

        showSlide(currentSlide - 1);

    }

    /* ===========================
       AUTO SLIDE
    =========================== */

    function startSlider() {

        autoSlide = setInterval(() => {

            nextSlide();

        }, 5000);

    }

    function stopSlider() {

        clearInterval(autoSlide);

    }

    /* ===========================
       BUTTON EVENTS
    =========================== */

    if (nextBtn) {

        nextBtn.addEventListener("click", () => {

            nextSlide();

        });

    }

    if (prevBtn) {

        prevBtn.addEventListener("click", () => {

            prevSlide();

        });

    }

    /* ===========================
       PAUSE ON HOVER
    =========================== */

    slider.addEventListener("mouseenter", stopSlider);

    slider.addEventListener("mouseleave", startSlider);

    /* ===========================
       TOUCH SWIPE
    =========================== */

    let touchStartX = 0;

    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    });

    slider.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        if (touchEndX < touchStartX - 50) {

            nextSlide();

        }

        if (touchEndX > touchStartX + 50) {

            prevSlide();

        }

    });

    /* ===========================
       KEYBOARD SUPPORT
    =========================== */

    document.addEventListener("keydown", (e) => {

        if (e.key === "ArrowRight") {

            nextSlide();

        }

        if (e.key === "ArrowLeft") {

            prevSlide();

        }

    });

    /* ===========================
       INIT
    =========================== */

    showSlide(0);

    startSlider();

});