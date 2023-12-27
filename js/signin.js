
let password = document.getElementById("password");
let email = document.getElementById("email");
let signin = document.getElementById("signin");


let getuser= localStorage.setItem("email");
let getpassword= localStorage.setItem("password");

signin.addEventListener("click", function () {
    if(username.value=="" || email.value=="" || password.value=="" ){
        alert("fill the ridister")
    }else {
     if(getuser&& getuser.trim()=== email.value.trim && getpassword=== password.value){
       
        setTimeout(() => {
            window.location.href="index.html";
          }, 1500)
     }else{
        alert ("wrong email or passowrd")
     }
       
    }
});