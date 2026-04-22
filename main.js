const submitBtn = document.querySelector(".submit-btn");
const contactForm = document.querySelector(".contact-form");
const InputAll = document.querySelectorAll("input");
const textInputs = document.querySelectorAll(".form-group__input");

textInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    textInputs.forEach((item) => item.classList.remove("correct"));
    input.classList.add("correct");
  });
});



const isRadioSelected = document.querySelector(
  'input[name="query-type"]:checked',
);
const radioCards = document.querySelectorAll(".radio-card");
radioCards.forEach((card) => {
  
  card.addEventListener("click", () => {
    radioCards.forEach(c => c.classList.remove("radio-card-selected"));
    card.classList.add("radio-card-selected");
    const radioInput = card.querySelector('input[type="radio"]');
    if (radioInput) radioInput.checked = true;
  });
});
  
submitBtn.addEventListener("click", () => {
  InputAll.forEach((input) => {
    const errorMsg = input.parentElement.querySelector(".error-message");
    if (input.value.trim() === "") {
      input.classList.add("error");
      input.classList.remove("correct")
      if (errorMsg) errorMsg.style.display = "block";
    } else {
      input.classList.remove("error");
      input.classList.add("correct")
      if (errorMsg) errorMsg.style.display = "none";
    }
  });
  const isRadioSelected = document.querySelector(
    'input[name="query-type"]:checked',
  );
  const radioCards = document.querySelectorAll(".radio-card");
  const radioErrorMsg = document.querySelector(".query-type .error-message");

  if (!isRadioSelected) {
    radioCards.forEach((card) => card.classList.add("error"));
    radioCards.forEach((card) => card.classList.remove("correct"));
    if (radioErrorMsg) radioErrorMsg.style.display = "block";
    isValid = false;
  } else {
    radioCards.forEach((card) => card.classList.remove("error"));
    radioCards.forEach((card) => card.classList.add("correct"));
    if (radioErrorMsg) radioErrorMsg.style.display = "none";
  }
  const inputsAndTextarea = document.querySelectorAll(
    ".form-group__input, .form-group__textarea",
  );
  inputsAndTextarea.forEach((field) => {
    const errorMsg = field.parentElement.querySelector(".error-message");

    if (field.value.trim() === "") {
      field.classList.add("error");
       field.classList.remove("correct");
      if (errorMsg) errorMsg.style.display = "block";
    } else {
      field.classList.remove("error");
      field.classList.add("correct");
      if (errorMsg) errorMsg.style.display = "none";
    }
  });
  const consentCheckbox = document.querySelector("#consent");
  const consentErrorMsg = document.querySelector(
    ".consent-group .error-message",
  );

  if (!consentCheckbox.checked) {
    if (consentErrorMsg) consentErrorMsg.style.display = "block";
    isValid = false;
  } else {
    if (consentErrorMsg) consentErrorMsg.style.display = "none";
  }

  if (isValid) {
    const successBanner = document.querySelector(".success-banner");
    successBanner.classList.remove("hidden");

    contactForm.reset();
    setTimeout(() => {
      successBanner.classList.add("hidden");
    }, 5000);
  }
});
