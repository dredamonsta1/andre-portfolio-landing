// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// let modalBtn = document.querySelector(".intro");
// let workModalBtn = document.querySelector(".work");
// let aboutModalBtn = document.querySelector(".about");
// let contactModalBtn = document.querySelector(".contact");


let modalBgIntro = document.querySelector(".modal-bg");
let modalBgWork = document.querySelector(".modal-bg-work");
let modalBgAbout = document.querySelector(".modal-bg-about");
let modalBgContact = document.querySelector(".modal-bg-contact");

let modalClose = document.querySelector(".modal-close");



[
    document.querySelector(".intro"), 
    document.querySelector(".work"),
    document.querySelector(".about"),
    document.querySelector(".contact")
].forEach(item => {
    
    item.addEventListener("click", function(){
        modalBgIntro.classList.add("bg-active");
        // modalBgWork.classList.add("bg-active");

    })
})



modalClose.addEventListener("click", function(){
    modalBgIntro.classList.remove("bg-active");
});

// modalBtn.addEventListener('click', function(){
//     modalBg.classList.add("bg-active");
// });

// workModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });

// aboutModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });


// contactModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });