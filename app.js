const signUpToNewsletter = document.querySelector(".signUpToNewsletter");

document.body.addEventListener("mousemove", function(event){
    if (event.clientY < 50) signUpToNewsletter.style.display = "block"

})