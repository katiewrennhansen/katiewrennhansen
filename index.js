//DOM VARIABLES
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const button = document.querySelector('button');
const navbar = document.getElementById("navbar");
const homePage = document.getElementById("home-page");
const content = document.getElementById("line");
const main = document.querySelector('main');
const projects = document.querySelectorAll('.single-proj');
const overlay = document.querySelectorAll('.overlay');



//MENU FILL-IN ON SCROLL
function scrollBehavior() {
    window.addEventListener('scroll', function(){
        if (window.pageYOffset > 10){
            nav.classList.add('background-color');
            navbar.classList.add('transition', 'background-color');
            logo.classList.add('up');
        } else {
            nav.classList.remove('background-color');
            navbar.classList.remove('transition', 'background-color');
            logo.classList.remove('up');
        }
    });
}

function homePageFade(){
    $(document).ready(function() {
        // $('h1.hidden').fadeIn(1800).removeClass('hidden');
        // $('p.hidden').fadeIn(1800).removeClass('hidden');
        $('div.hidden').fadeIn(1800).removeClass('hidden');
        $('nav.hidden').fadeIn(1800).removeClass('hidden');
    });
}
 


//TOGGLE NAV BUTTON SHOW
function navToggle(){
    button.addEventListener('click', function(){
        navbar.classList.toggle('show-nav');
      });
    main.addEventListener('click', function(){
        navbar.classList.remove('show-nav');
    });
    homePage.addEventListener('click', function(){
        navbar.classList.remove('show-nav');
    });
}

function navFocus(){
    button.addEventListener('focus', function(){
        navbar.classList.toggle('show-nav');
      });
    button.addEventListener('blur', function(){
        navbar.classList.remove('show-nav');
    });
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




//CALL ALL FUNCTIONS
function callAllFuntions(){
    homePageFade();
    scrollBehavior();
    navToggle();
    navFocus();
    overlayClick();
    overlayFocus();
    iconLinkFocus();
}


callAllFuntions();          