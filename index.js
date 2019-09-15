//DOM VARIABLES
const nav = document.getElementById('nav');
const logo = document.querySelector('.logo');
const button = document.querySelector('button');
const navbar = document.getElementById("navbar");
const homePage = document.getElementById("home-page");
const content = document.getElementById("line");
const main = document.querySelector('main');
const projects = document.querySelectorAll('.single-proj');
const overlay = document.querySelectorAll('.overlay');
const collapse = document.querySelector('.collapse-content');
const navLinks = document.querySelectorAll('.nav-link');



//MENU FILL-IN ON SCROLL
function scrollBehavior(){
    if (window.pageYOffset > 10){
        nav.classList.add('background-color');
        navbar.classList.add('transition', 'background-color');
        logo.classList.add('up');
    } else {
        nav.classList.remove('background-color');
        navbar.classList.remove('transition', 'background-color');
        logo.classList.remove('up');
    }
}


function homePageFade(){
    $(document).ready(function() {
        $('div.hidden').fadeIn(1800).removeClass('hidden');
        $('nav.hidden').fadeIn(1800).removeClass('hidden');
    });
}


//TOGGLE NAV 

function toggleNav(){
    collapse.classList.toggle('toggle');
    button.classList.toggle('cross');
    nav.classList.toggle('nav-background');
}

function removeNav(){
    collapse.classList.remove('toggle');
    button.classList.remove('cross');
}



//TOGGLE PROJECT IMAGE OVERLAY
function overlayClick(){
    overlay.forEach(function(img){
        img.addEventListener('click', function(){
            this.classList.toggle('show');
        });
    });
}

function overlayFocus(){
    const projBtn = document.querySelectorAll('.project-button');

    for (let i = 0; i < projects.length; i++){
        projBtn[i].addEventListener('focus', function(){
            overlay[i].classList.add('show');
        });   
        projBtn[i].addEventListener('blur', function(){
            overlay[i].classList.remove('show');
        });                
       
    }
}


//ADD EVENT LISTENERS
window.addEventListener('scroll', scrollBehavior);
button.addEventListener('click', toggleNav);
main.addEventListener('click', removeNav);
homePage.addEventListener('click', removeNav);
//open nav with tab
button.addEventListener('focus', toggleNav);
button.addEventListener('blur', removeNav);

navLinks.forEach(link => {
    link.addEventListener('click', removeNav);
});


//CALL ALL FUNCTIONS
function callAllFuntions(){
    homePageFade();
    overlayClick();
    overlayFocus();
}


callAllFuntions();          