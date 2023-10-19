const errorIcon = document.querySelector(".error-icon")
const errorMessage = document.querySelector(".error-message");
const emailInput = document.querySelector("#email");
const outline = document.querySelector("input[type=email]:focus");
// regular expression 
const emailRegex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//  A function that does the the email validation using the reglar expression
function emailValidation(){
    
    const emailValid = emailInput.value.length === 0 ||emailRegex.test(emailInput.value);

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

}

emailInput.addEventListener("input", ()=>{
    emailValidation();
})
emailInput.addEventListener("submit",(event)=>{
    event.preventDefault();
    emailValidation();
})