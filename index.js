


let modalBtn = document.querySelector(".intro");
let workModalBtn = document.querySelector(".work");
let aboutModalBtn = document.querySelector(".about");
let contactModalBtn = document.querySelector(".contact");


let modalBg = document.querySelector(".modal-bg");

let modalClose = document.querySelector(".modal-close");



[
    document.querySelector(".intro"), 
    document.querySelector(".work"),
    document.querySelector(".about"),
    document.querySelector(".contact")
].forEach(item => {
    
    item.addEventListener("click", function(){
        modalBg.classList.add("bg-active");
    })
})

// modalBtn.addEventListener('click', function(){
//     modalBg.classList.add("bg-active");
// });

modalClose.addEventListener("click", function(){
    modalBg.classList.remove("bg-active");
});


// workModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });

// aboutModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });


// contactModalBtn.addEventListener("click", function(){
//     modalBg.classList.add("bg-active");
// });