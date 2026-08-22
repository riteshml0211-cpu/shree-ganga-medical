// ================================
// Medicine Search
// ================================

function searchMedicine() {

    let input = document.getElementById("medicineSearch");

    if (!input) return;

    let filter = input.value.toUpperCase();

    let table = document.getElementById("medicineTable");

    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {

        let td = tr[i].getElementsByTagName("td")[0];

        if (td) {

            let txtValue = td.textContent || td.innerText;

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

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ================================
// Fade Animation
// ================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.service-card,.gallery-card").forEach((el)=>{

observer.observe(el);

});

// ================================
// Scroll To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){

topButton.style.display = "block";

}else{

topButton.style.display = "none";

}

};

topButton.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ================================
// Highlight Active Navigation Link
// ================================

const currentPage = window.location.pathname;

document.querySelectorAll(".navbar a").forEach(link => {

    if(link.getAttribute("href") === currentPage){

        link.classList.add("active");

    }

});

// ================================
// Contact Form

// ================= Slider =================

let slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

setInterval(()=>{

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

},4000);
// ================= Counter Animation =================

const counters = document.querySelectorAll(".counter");

const speed = 100;

counters.forEach(counter=>{

const updateCount=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(updateCount,20);

}else{

counter.innerText=target+"+";

}

};

updateCount();

});
// ================= FAQ =================

const faqs = document.querySelectorAll(".faq-question");

faqs.forEach(button=>{

button.addEventListener("click",()=>{

const answer = button.nextElementSibling;

const icon = button.querySelector("span");

if(answer.style.display==="block"){

answer.style.display="none";

icon.innerHTML="+";

}else{

answer.style.display="block";

icon.innerHTML="−";

}

});

});
// ================= Card Hover Animation =================

const cards = document.querySelectorAll(
".card,.service-card,.featured-card,.category-card,.brand-card,.stat-box"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
// ================= Gallery Lightbox =================

function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}
window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>80){

navbar.style.background="rgba(13,92,70,.95)";

navbar.style.top="0";

navbar.style.width="100%";

navbar.style.borderRadius="0";

}else{

navbar.style.background="rgba(255,255,255,.12)";

navbar.style.top="20px";

navbar.style.width="92%";

navbar.style.borderRadius="20px";

}

});
// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

if (menuToggle && navbarMenu) {

    menuToggle.addEventListener("click", () => {

        navbarMenu.classList.toggle("active");

        // Change hamburger icon
        const icon = menuToggle.querySelector("i");

        if (navbarMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

    // Close menu after clicking a link
    navbarMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbarMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}