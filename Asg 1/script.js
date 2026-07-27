/* ==========================
   TYPING ANIMATION
========================== */

const typing = document.getElementById("typing");

const text = "Frontend Developer | Aspiring Data Analyst";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}

window.onload = typeEffect;


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================
   ACTIVE NAVBAR
========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});