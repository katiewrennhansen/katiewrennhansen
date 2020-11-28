//DOM VARIABLES
const nav = document.getElementById('nav');
const button = document.querySelector('button.nav-button');
const navbar = document.getElementById("navbar");
const homePage = document.getElementById("home-page");
const main = document.querySelector('main');
const projects = document.querySelectorAll('.single-proj');
const overlay = document.querySelectorAll('.overlay');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');

let navOpen = false;

//TOGGLE NAV 
function toggleNav(){
    navOpen = !navOpen;
    collapse.classList.toggle('toggle');
    button.classList.toggle('cross');
    nav.classList.toggle('nav-background');

    if(navOpen){
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
}

function removeNav(){
    navOpen = false;
    document.body.style.overflow = 'scroll';
    collapse.classList.remove('toggle');
    button.classList.remove('cross');
    nav.classList.remove('nav-background');
}



//TOGGLE PROJECT IMAGE OVERLAY
function overlayClick(){
    overlay.forEach(img => {
        img.addEventListener('click', () => {
            this.classList.toggle('show');
        });
    });
}

//TOGGLE PROJECT IMAGE OVERLAY ON FOCUS
function overlayFocus(){
    const projBtn = document.querySelectorAll('.project-button');
    for (let i = 0; i < projects.length; i++){
        projBtn[i].addEventListener('focus', () => {
            overlay[i].classList.add('show');
        });   
        projBtn[i].addEventListener('blur', () => {
            overlay[i].classList.remove('show');
        });                
       
    }
}

overlayFocus();


//EVENT LISTENERS
button.addEventListener('click', toggleNav);

navLinks.forEach(link => {
    link.addEventListener('click', removeNav);
});

window.addEventListener('resize', () => {
    if(window.innerWidth < 768){
        overlayClick();
    }
    if(window.innerWidth > 767 && navOpen){
        removeNav();
    }
})