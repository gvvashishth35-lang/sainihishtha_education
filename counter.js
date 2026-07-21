/* ==========================================
   SAINIHISHTHA EDUCATION
   counter.js
   Professional Animated Counter
========================================== */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       COUNTER ELEMENTS
    =============================== */

    const counters = document.querySelectorAll(".counter");

    /* ===============================
       START COUNTER
    =============================== */

    const startCounter = (counter) => {

        const target = Number(counter.getAttribute("data-target"));

        const speed = 200;

        let count = 0;

        const increment = Math.ceil(target / speed);

        const updateCounter = () => {

            count += increment;

            if (count >= target) {

                counter.innerText = target.toLocaleString() + "+";

                clearInterval(interval);

            } else {

                counter.innerText = count.toLocaleString() + "+";

            }

        };

        const interval = setInterval(updateCounter, 10);

    };

    /* ===============================
       INTERSECTION OBSERVER
    =============================== */

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                startCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach((counter) => {

        observer.observe(counter);

    });

});