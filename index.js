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

// get modal element
var modal = document.getElementById("introModal");

// get open modal
var introBtn = document.getElementById("introModalBtn");

// get close button
var closeBtn = document.getElementsByClassName("modal-close")[0];

// listen for open click
introBtn.addEventListener('click', changeColor);

// listen for close click
// introBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
  modal.style.display = 'block';
  console.log('123')

}

function changeColor(newColor) {
  var elem = document.getElementById("introModal");
  elem.style.display = newColor;
  console.log("jump")
}

// function to close modal
// function closeModal() {
//   modal.style.display = 'none';
//   console.log('end')

// }

// introBtn.onclick = function() {
//     modal[0].style.display = "block";
//     console.log("you clicked")
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
//     console.log("x got clicked")
//   }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }

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