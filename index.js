// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



let modalBgIntro = document.querySelector(".modal-bg");
// let modalBgWork = document.querySelector(".modal-bg-work");
// let modalBgAbout = document.querySelector(".modal-bg-about");
// let modalBgContact = document.querySelector(".modal-bg-contact");

// let modalClose = document.querySelector(".modal-close");

// *********************************NEW CODE*************
var modal = document.getElementById("introModal");

var introBtn = document.getElementById("introModalBtn");

var span = document.getElementsByClassName("modal-close")[0];



introBtn.onclick = function() {
    modal.style.display = "block";
    console.log("you clicked")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    console.log("x got clicked")
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// [
//     document.querySelector(".intro"), 
//     document.querySelector(".work"),
//     document.querySelector(".about"),
//     document.querySelector(".contact")
// ].forEach(item => {
    
//     item.addEventListener("click", function(modalInfo){
//         modalBgIntro.classList.add("bg-active");
        // modalBgAbout.classList.add("bg-active");
        // modalBgIntro.classList.add("bg-active");
        // return 

//     })
// });



// modalClose.addEventListener("click", function(){
//     modalBgIntro.classList.remove("bg-active");
    // modalBgAbout.classList.remove("bg-active");
    // modalBgContact.classList.remove("bg-active");
// });


// function modalInfo() {
//     return 
//     let introModal = modalBgIntro.classList.add("bg-active");
    
//     let workModal = modalBgWork.classList.add("bg-active");
    
//     let aboutModal = modalBgAbout.classList.add("bg-active");
    
//     let contactModal = modalBgContact.classList.add("bg-active");
// }