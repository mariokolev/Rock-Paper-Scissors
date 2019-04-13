
const list = document.querySelector('#r-p-s');

list.addEventListener('click', function(e){

    if(e.target.classList.contains('fa-hand-rock')){
        alert("you've chosen rock");
    }

});