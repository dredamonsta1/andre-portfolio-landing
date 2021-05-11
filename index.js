let modal = document.getElementById("");

let btn = document.getElementById("");

let span = document.getElementById("");

btn.onClick = function () {
    modal.style.display = "";
    console.log("you clicked btn");
}

span.onClick = function () {
    modal.style.display = "none";
    console.log("you clicked span");
}

window.onClick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    console.log("you clicked window");
}