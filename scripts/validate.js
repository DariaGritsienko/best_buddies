class Validation {
  constructor(words){
    this.words = words;
  }
  handleValidate(word) {
    const inputs = [name, email];
    let isValid = true;
    this.validate(word);

    inputs.forEach((elem) => {
      if (!this.validate(elem)) isValid = false;
    });
    if (isValid) {
      checkbox(isValid);
    } else {
      submit.setAttribute('disabled', true);
      submitOnes.setAttribute('disabled', true);
    }
  }
  handleValidatePopup(word) {
    const inputs = [namePopup, emailPopup];
    let isValid = true;
    this.validate(word);

    inputs.forEach((elem) => {
      if (!this.validate(elem)) isValid = false;
    });
    if (isValid) {
      checkboxPopup(isValid);
    } else {
      submitPopup.setAttribute('disabled', true);
      submitOnesPopup.setAttribute('disabled', true);
    }
  }
  validate(element) {
    const errorElement = document.querySelector(`#error-${element.id}`);
    const errorButton = document.querySelector(`.button-${element.id}`);
    const errorText = document.querySelector(`#text-${element.id}`);

    if (!element.checkValidity()) {
      errorButton.style.borderColor = '#ED180B';
      errorButton.style.color = '#ED180B';
      errorText.style.color = '#ED180B';
      if (element.validity.valueMissing) {
        errorElement.textContent = this.words.validationRequired;
      }
      if (element.validity.typeMismatch) {
        errorElement.textContent = this.words.validationType;
      }
      this.activateError(errorElement);

      return false;
    }
    this.resetError(element);
    errorButton.style.borderColor = '#9397CB';
    errorButton.style.color = '#333235';
    errorText.style.color = '#5a4f98';
    return true;
  }
  activateError(element) {
    element.parentNode.classList.add('form__input_invalid');

  }
  resetError(element) {
    element.parentNode.classList.remove('form__input_invalid');
    element.textContent = '';
  }
  sendForm() {
    const inputs = [name, email];
    let isValidForm = true;

    inputs.forEach((elem) => {
      if (!this.validate(elem)) isValidForm = false;
    });
    if (isValidForm && document.querySelector('#check').checked) {
      submit.setAttribute('disabled', true);
      submitOnes.setAttribute('disabled', true);
    }
  }
  sendFormPopup() {
    const inputs = [namePopup, emailPopup];
    let isValidForm = true;

    inputs.forEach((elem) => {
      if (!this.validate(elem)) isValidForm = false;
    });
    if (isValidForm && document.querySelector('#checkbox').checked) {
      submitPopup.setAttribute('disabled', true);
      submitOnesPopup.setAttribute('disabled', true);
    }
  }
}

const form = document.forms.money;
const formPopup = document.forms.popup;
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const namePopup = document.querySelector('#namePopup');
const emailPopup = document.querySelector('#emailPopup');
const submit = document.querySelector('#submit');
const submitOnes = document.querySelector('#submitOnes');
const formMoney = document.querySelector('.form__money');
const popupMoney = document.querySelector('.popup__money');
const submitPopup = document.querySelector('#submitPopup');
const submitOnesPopup = document.querySelector('#submitOnesPopup');
const words = {
  validationType: 'Адрес почты указан в неверном формате',
  validationRequired: 'Пожалуйста, заполните поле'
};
const validation = new Validation(words);

checkbox();
checkboxPopup();

name.addEventListener('input', function(event){
  validation.handleValidate(event.target);
});
email.addEventListener('input', function(event){
  validation.handleValidate(event.target);
});
namePopup.addEventListener('input', function(event){
  validation.handleValidatePopup(event.target);
});
emailPopup.addEventListener('input', function(event){
  validation.handleValidatePopup(event.target);
});

submit.addEventListener('click', function (event) {
  event.preventDefault();

  validation.sendForm();

  pay(Number(formMoney.value), email.value);
  form.reset();
});
submitOnes.addEventListener('click', function (event) {
  event.preventDefault();

  validation.sendForm();

  pay(Number(formMoney.value), email.value);
  form.reset();
});
submitPopup.addEventListener('click', function (event) {
  event.preventDefault();

  validation.sendFormPopup();

  pay(Number(popupMoney.value), emailPopup.value);
  formPopup.reset();
});
submitOnesPopup.addEventListener('click', function (event) {
  event.preventDefault();

  validation.sendFormPopup();

  pay(Number(popupMoney.value), emailPopup.value);
  formPopup.reset();
});


document.querySelector('.header__social').addEventListener('click', function(){
  anotherPopup.social();
});
document.querySelector('.header__button').addEventListener('click', function(){
  popup.popupOpen();
});
document.querySelector('.popup__close').addEventListener('click', function(){
  popup.popupClose();
});
document.querySelector('.popup__thanks-close').addEventListener('click', function(){
  popup.popupClose();
});
document.querySelector('.footer__button').addEventListener('click', function(){
  popup.popupOpen();
});
