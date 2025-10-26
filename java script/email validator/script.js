let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    document.querySelector("#emailError").textContent="";
    document.querySelector("#passwordError").textContent="";  
    document.querySelector("#result").textContent=""; 
    

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans=emailRegex.test(email.value);
    let passwordans= passwordRegex.test(password.value);

    let isValid =true;
    if(!emailans){
        document.querySelector("#emailError").textContent="email is incorrect";
        document.querySelector("#emailError").style.display ="initial"
        isValid= false;
    }
    if(!passwordans){
        document.querySelector("#passwordError").textContent="password is incorrect";
        document.querySelector("#passwordError").style.display ="initial"
        isValid =false;
    }
     

    if (isValid){
        document.querySelector("#result").textContent ="everything is fine"
    }
});