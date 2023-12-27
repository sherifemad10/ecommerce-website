let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    if(username.value=="" || email.value=="" || password.value=="" ){
        alert("fill the ridister")
    }else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        localStorage.setItem("email", email.value);

       setTimeout(() => {
         window.location.href="signin.html";
       }, 1500)
       
    }
});