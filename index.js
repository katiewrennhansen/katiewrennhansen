//MENU FILL-IN ON SCROLL
const nav = document.querySelector('nav');
const collapseContent = document.getElementById('navbar');

document.addEventListener('scroll', function(){
    nav.classList.add('background-color');
    collapseContent.classList.add('background-color');
    collapseContent.classList.add('transition');
});



//TOGGLE NAV BUTTON SHOW
const button = document.querySelector('button');
const navbar = document.getElementById("navbar")

button.addEventListener('click', function(){
    navbar.classList.toggle('show-nav');
  });




//TOGGLE PROJECT IMAGE OVERLAY
const overlay = document.querySelectorAll('.overlay');

overlay.forEach(function(img){
    img.addEventListener('click', function(){
        this.classList.toggle('show');
    }); 
});

