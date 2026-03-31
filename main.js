const submitBtn=document.querySelector(".submit-btn");
const contactForm=document.querySelector(".contact-form")
const InputAll=document.querySelectorAll("input")
const errorMessage=document.querySelector(".error-message")
const errorRadioButton=document.querySelectorAll(".radio-card")
const errorTextArea=document.querySelector("textarea")
submitBtn.addEventListener("click",(e)=>{
InputAll.forEach((input) => {
  // input.nextElementSibling -> bu komut inputun hemen altındaki p etiketini yakalar
  const errorMsg = input.parentElement.querySelector(".error-message");
  
  if (input.value.trim() === "") {
     input.classList.add("error");
     if(errorMsg) errorMsg.style.display = "block";
  } else {
     input.classList.remove("error");
     if(errorMsg) errorMsg.style.display = "none";
  }
});

  
})
