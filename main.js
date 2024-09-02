const wrapperSignUp = document.querySelector(".wrapper-signUp");
const wrapperSuccess = document.querySelector(".wrapper-success");
const btnSuccess = document.querySelector(".btn-success");
const form = document.forms[0];

form.addEventListener("submit",(e)=>{
    e.target.preventDefault;

    wrapperSignUp.classList.add("hidden");
    wrapperSuccess.classList.remove("hidden");


});


btnSuccess.addEventListener("click",()=>{
    form.email.value = "";
    wrapperSignUp.classList.remove("hidden");
    wrapperSuccess.classList.add("hidden");


});





