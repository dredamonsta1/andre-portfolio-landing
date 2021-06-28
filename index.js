


let modalBtn = document.querySelector(".intro");
let workModalBtn = document.querySelector(".work");
let aboutModal = document.querySelector(".about");
let contactModal = document.querySelector(".contact");


let modalBg = document.querySelector(".modal-bg");

let modalClose = document.querySelector(".modal-close");




modalBtn.addEventListener('click', function(){
    modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function(){
    modalBg.classList.remove("bg-active");
});


workModalBtn.addEventListener('click', function(){
    modalBg.classList.add("bg-active");
});

aboutModal.addEventListener("click", function(){
    modalBg.classList.add("bg=active");
});