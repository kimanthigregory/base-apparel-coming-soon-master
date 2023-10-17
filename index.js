const errorIcon = document.querySelector(".error-icon")
const errorMessage = document.querySelector(".error-message");
const emailInput = document.querySelector("#email");
const outline = document.querySelector("input[type=email]:focus");

const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 
const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);
// check if the email input is valid upon the load loading
window.addEventListener("load", ()=>{
    if (emailValid){
        errorIcon.classList.remove("show-error-icon");
        errorMessage.classList.remove("show-error-message");
        errorIcon.classList.remove("show-error-outline");

    }
    else{
        errorIcon.classList.add("show-error-icon");
        errorMessage.classList.add("show-error-message");
        errorIcon.classList.add("show-error-outline");
    }
})

emailInput.addEventListener("input", ()=>{
    const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);

    if (emailValid){
        errorIcon.classList.remove("show-error-icon");
        errorMessage.classList.remove("show-error-message");
        errorIcon.classList.remove("show-error-outline");
        // alert("valid");
    }
    else{
        errorIcon.classList.add("show-error-icon");
        errorMessage.classList.add("show-error-message");
        errorIcon.classList.add("show-error-outline");
        // alert("invalid");
    }
})
emailInput.addEventListener("submit",(event)=>{
    event.preventDefault();

    const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);

    if (emailValid){
        errorIcon.classList.remove("show-error-icon");
        errorMessage.classList.remove("show-error-message");
        errorIcon.classList.remove("show-error-outline");
        // alert("valid");
    }
    else{
        errorIcon.classList.add("show-error-icon");
        errorMessage.classList.add("show-error-message");
        errorIcon.classList.add("show-error-outline");
        // alert("invalid");
    }

})