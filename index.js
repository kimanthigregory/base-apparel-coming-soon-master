const errorIcon = document.querySelector(".error-icon img");
const errorMessage = document.querySelector(".error-message p");
const emailInput = document.querySelector("#email");

const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);
// check if the email input is valid upon the load loading
window.addEventListener("load", ()=>{
    if (emailValid){
        alert("valid");
    }
    else{
        alert("email is invalid");
    }
})

emailInput.addEventListener("input", ()=>{
    if(emailValid){
        alert("valid");
    }
    else{
        alert("email is invalid");
    }
})
emailInput.addEventListener("submit",(event)=>{
    const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);

    event.preventDefault()
    if(!emailValid){
        alert("valid");
    }
    else{
        alert("email is invalid");
    }
})