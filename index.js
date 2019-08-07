


//TOGGLE PROJECT IMAGE OVERLAY
const overlay = document.querySelectorAll('.overlay');

overlay.forEach(function(img){
    img.addEventListener('click', function(){
        this.classList.toggle('show');
    }); 
});
