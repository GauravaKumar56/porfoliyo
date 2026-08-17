// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior: 'smooth'

        });

    });

});


// ==========================
// Typing Effect
// ==========================

const roles = [

    "Frontend UI Developer",

    "Web Developer",

    "JavaScript Developer",

    "UI Designer"

];

let roleIndex = 0;
let charIndex = 0;

const roleText = document.querySelector(".hero-text h2");

function typingEffect(){

    if(charIndex < roles[roleIndex].length){

        roleText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typingEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

    }

}

function deleteEffect(){

    if(charIndex>0){

        roleText.textContent = roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(deleteEffect,60);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typingEffect,300);

    }

}

roleText.textContent="";

typingEffect();


// ==========================
// Reveal Animation
// ==========================

const reveals = document.querySelectorAll(

".about-box,.card,.project-card,form"

);

window.addEventListener("scroll",()=>{

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0px)";

        }

    });

});

reveals.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(80px)";

    item.style.transition="1s";

});


// ==========================
// Active Navbar
// ==========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// ==========================
// Back To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.background="#00e5ff";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="22px";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ==========================
// Project Hover Glow
// ==========================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow="0 0 35px cyan";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="none";

    });

});


// ==========================
// Contact Form
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent.");

    form.reset();

});

// ============================
// PRELOADER
// ============================

window.addEventListener("load", () => {

    const loader = document.createElement("div");

    loader.id = "loader";

    loader.innerHTML = `
        <div class="loader-box">
            <h1>GAURAV</h1>
            <span>Loading Portfolio...</span>
        </div>
    `;

    document.body.appendChild(loader);

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.remove();
        }, 500);

    }, 1200);

});


// ============================
// CUSTOM CURSOR
// ============================

const cursor = document.createElement("div");

cursor.className = "cursor";

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// ============================
// MOUSE GLOW
// ============================

const glow = document.createElement("div");

glow.className = "glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 100 + "px";

    glow.style.top = e.clientY - 100 + "px";

});