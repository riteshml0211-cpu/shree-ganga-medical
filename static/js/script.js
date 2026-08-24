// ========================================
// SHREE GANGA MEDICAL - MAIN JAVASCRIPT
// ========================================


// ================================
// MEDICINE SEARCH
// ================================

function searchMedicine() {

    const input = document.getElementById("medicineSearch");
    const table = document.getElementById("medicineTable");

    if (!input || !table) return;

    const filter = input.value.toUpperCase();
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {

        const firstCell = rows[i].getElementsByTagName("td")[0];

        if (!firstCell) continue;

        const text = firstCell.textContent || firstCell.innerText;

        if (text.toUpperCase().includes(filter)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }

    }

}


// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================================
// FADE ANIMATION
// ================================

const animatedElements = document.querySelectorAll(
    ".card, .service-card, .gallery-card, .category-card, .why-card"
);

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.1
    });


    animatedElements.forEach(element => {
        observer.observe(element);
    });

}


// ================================
// SCROLL TO TOP BUTTON
// ================================

const topButton = document.createElement("button");

topButton.id = "topBtn";
topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);


function handleTopButton() {

    if (window.scrollY > 300) {
        topButton.style.display = "flex";
    } else {
        topButton.style.display = "none";
    }

}


window.addEventListener("scroll", handleTopButton);

window.addEventListener("load", handleTopButton);


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// ACTIVE PAGE NAVIGATION
// ================================

const currentPage = window.location.pathname;

document.querySelectorAll(".navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (!href) return;

    if (href === currentPage) {

        link.classList.add("active");

    }

});


// ================================
// SLIDER
// ================================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;


function showSlide(index) {

    if (slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}


if (slides.length > 1) {

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);

    }, 4000);

}


// ================================
// COUNTER ANIMATION
// ================================

const counters = document.querySelectorAll(".counter");


function animateCounter(counter) {

    const target = Number(counter.getAttribute("data-target"));

    if (isNaN(target)) return;

    const duration = 1500;
    const startTime = performance.now();


    function updateCounter(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const value = Math.floor(progress * target);

        counter.innerText = value;

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = target + "+";

        }

    }

    requestAnimationFrame(updateCounter);

}


counters.forEach(counter => {

    animateCounter(counter);

});


// ================================
// FAQ
// ================================

const faqs = document.querySelectorAll(".faq-question");


faqs.forEach(button => {

    button.addEventListener("click", function () {

        const answer = this.nextElementSibling;
        const icon = this.querySelector("span");

        if (!answer) return;

        const isOpen = answer.style.display === "block";


        // Close all FAQ answers
        document.querySelectorAll(".faq-answer").forEach(item => {
            item.style.display = "none";
        });


        document.querySelectorAll(".faq-question span").forEach(item => {
            item.innerHTML = "+";
        });


        // Open selected FAQ
        if (!isOpen) {

            answer.style.display = "block";

            if (icon) {
                icon.innerHTML = "−";
            }

        }

    });

});


// ================================
// GALLERY LIGHTBOX
// ================================

function openImage(src) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (!lightbox || !lightboxImg) return;

    lightbox.style.display = "flex";

    lightboxImg.src = src;

}


function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    lightbox.style.display = "none";

}


// ================================
// CLOSE LIGHTBOX ON OUTSIDE CLICK
// ================================

document.addEventListener("click", function (e) {

    const lightbox = document.getElementById("lightbox");

    if (!lightbox) return;

    if (e.target === lightbox) {

        closeImage();

    }

});


// ================================
// ESC KEY CLOSE LIGHTBOX
// ================================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        closeImage();

    }

});


// ================================
// END
// ================================