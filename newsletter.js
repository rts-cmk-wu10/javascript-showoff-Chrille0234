const signUpToNewsletter = document.querySelector(".signUpToNewsletter");
const close = document.querySelector(".signUpToNewsletter__close");
const emailField = signUpToNewsletter.querySelector("input[type='email']"); 
const dontaskagain = signUpToNewsletter.querySelector(".dont-ask-again");

let hasChanged = localStorage.getItem("dontaskagain") === "true" ? true : false;

document.body.addEventListener("mousemove", function(event){
    if (event.clientY < 50 && !hasChanged) {
        signUpToNewsletter.style.display = "block"
        hasChanged = true;
    }
})
close.addEventListener("click", function(){
    signUpToNewsletter.style.display = "none"
    emailField.value = "";
})

dontaskagain.addEventListener("click", function(){
    signUpToNewsletter.style.display = "none"
    emailField.value = "";
    localStorage.setItem("dontaskagain", "true");
})