// var modal = document.getElementById('id01');


// *********************Modal******************
let modal = document.getElementById('introModal')
let modalWork = document.getElementById('workModal')
let modalAbout = document.getElementById('aboutModal')
let modalContact = document.getElementById('contactModal')

// *********************Open Modal******************
let openIntro = document.getElementById('introModalBtn')

let openWork = document.getElementById('workModalBtn')

let openAbout = document.getElementById('aboutModalBtn')

let openContact = document.getElementById('contactModalBtn')

// *********************CloseModal******************
let close = document.getElementsByClassName('modal-close')[0];

let closeWork = document.getElementsByClassName('modal-close')[1];

let closeAbout = document.getElementsByClassName('modal-close')[2];

let closeContact = document.getElementsByClassName('modal-close')[3];


// *********************OpenModal******************
openIntro.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modal.classList.add("bg-active");    
    // modal.style.display = "none";
  }
  console.log('did it work')
})

openWork.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalWork.classList.add("bg-active");
    
    // modal.style.display = "none";
  }
  console.log('did it work')
})

openAbout.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalAbout.classList.add("bg-active");
    
    // modal.style.display = "none";
  }
  console.log('did it work')
})

openContact.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalContact.classList.add("bg-active");
  }
})


// *********************CloseModal******************
close.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modal.classList.remove("bg-active"); 
    
  }
  console.log('did it work')
})

closeWork.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalWork.classList.remove("bg-active");
    console.log('did it work')
    
  }
})

closeAbout.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalAbout.classList.remove("bg-active");
    console.log('did it work')
    
  }
})

closeContact.addEventListener('click', (event) => {
  if (
    event.target !== modal && 
    event.target !== modalWork && 
    event.target !==modalAbout && 
    event.target !== modalContact
    )
    {
    return modalContact.classList.remove("bg-active");
    console.log('did it work')
    
  }
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}