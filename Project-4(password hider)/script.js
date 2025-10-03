let password = document.querySelector("#password");
let eyeClose = document.querySelector("#hidden");

eyeClose.addEventListener("click", ()=>{
    if(password.type === "password"){
        password.type = "text";
        eyeClose.src = "eye.png"

    }
    else{
        password.type = "password"
        eyeClose.src = "eye (2).png"
    }
})