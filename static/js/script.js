// ================================
// Medicine Search
// ================================

function searchMedicine() {

    const input = document.getElementById("medicineSearch");

    if (!input) return;

    const filter = input.value.toUpperCase();
    const table = document.getElementById("medicineTable");

    if (!table) return;

    const tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {

        const td = tr[i].getElementsByTagName("td")[0];

        if (td) {

            const txtValue = td.textContent || td.innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }

        }

    }

}


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        // Ignore empty #
        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});


document
    .querySelectorAll(".card, .service-card, .gallery-card")
    .forEach(el => {
        observer.observe(el);
    });


// ================================
// Scroll To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";
topButton.id = "topBtn";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// Highlight Active Navigation Link
// ================================

const currentPage = window.location.pathname;

document.querySelectorAll(".navbar a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }

});


// ================================
// Slider
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


if (slides.length > 0) {

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
// Counter Animation
// ================================

const counters = document.querySelectorAll(".counter");

const speed = 100;


counters.forEach(counter => {

    const updateCount = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCount, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCount();

});


// ================================
// FAQ
// ================================

const faqs = document.querySelectorAll(".faq-question");


faqs.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;
        const icon = button.querySelector("span");

        if (!answer) return;

        if (answer.style.display === "block") {

            answer.style.display = "none";

            if (icon) {
                icon.innerHTML = "+";
            }

        } else {

            answer.style.display = "block";

            if (icon) {
                icon.innerHTML = "−";
            }

        }

    });

});


// ================================
// Card Hover Animation
// ================================

const cards = document.querySelectorAll(
    ".card, .service-card, .featured-card, .category-card, .brand-card, .stat-box"
);


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ================================
// Gallery Lightbox
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

    if (lightbox) {
        lightbox.style.display = "none";
    }

}


// ========================================
// ACTIVE NAVIGATION ON SCROLL
// ========================================

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(
    '.navbar a[href^="#"]'
);


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);