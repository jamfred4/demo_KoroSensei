let user = document.querySelector(".username");
let pwd = document.querySelector(".password");

let popup = document.querySelector(".logout");

function cancelButton(){
    popup.style.display = "none";
}

function logoutButton(){
    popup.style.display = "block";
}


function cancel(){
    user.value = "";
    pwd.value = "";
}

function login(){
    if(user.value == "" || pwd.value == "") {
        logoutButton();
    }
    else {
        window.open("home.html");
    }
}




// document.querySelector(".submit").addEventListener("click", checkUserInput)
// function checkUserInput(){
    // alert("PLEASE FILL OUT THIS FIELD!")
// }