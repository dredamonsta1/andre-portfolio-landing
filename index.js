


let modalBtn = document.querySelector(".intro");
let workModalBtn = document.querySelector(".work");

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