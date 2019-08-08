//MENU FILL-IN ON SCROLL







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

