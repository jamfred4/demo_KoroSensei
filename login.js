let user = document.querySelector(".username");
let pwd = document.querySelector(".password");




function cancel(){
    user.value = "";
    pwd.value = "";
}



document.querySelector(".submit").addEventListener("click", checkUserInput)
function checkUserInput(){
    alert("PLEASE FILL OUT THIS FIELD!")
}