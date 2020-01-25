function buttonsMoney(n){
  const buttons = document.getElementsByClassName("form__button-money");
  const input = document.querySelector(".form__input-money");
  for (let i = 0; i < buttons.length; i++) {
    // очищаем активные кнопки
    buttons[i].classList.remove("form__button-money_active");
    input.classList.remove("form__input-money_active");
    buttons[i].classList.remove("form__money");
    input.classList.remove("form__money");
    formInputContainer.classList.toggle('form__input-container_active', false);
  }
  // включаем кнопки
  if (n===5) {
    input.classList.add("form__input-money_active");
    input.classList.add("form__money");
    formInputContainer.classList.toggle('form__input-container_active');
  }else{
    buttons[n-1].classList.add("form__button-money_active");
    buttons[n-1].classList.add("form__money");
  }
}

function buttonsMoneyPopup(n){
  const buttonsPopup = document.getElementsByClassName("popup__button-money");
  const inputPopup = document.querySelector(".popup__input-money");
  for (let i = 0; i < buttonsPopup.length; i++) {
    // очищаем активные кнопки
    buttonsPopup[i].classList.remove("popup__button-money_active");
    inputPopup.classList.remove("popup__input-money_active");
    buttonsPopup[i].classList.remove("popup__money");
    inputPopup.classList.remove("popup__money");
    popupInputContainer.classList.toggle('popup__input-container_active', false);
  }
  // включаем кнопки
  if (n===5) {
    inputPopup.classList.add("popup__input-money_active");
    inputPopup.classList.add("popup__money");
    popupInputContainer.classList.toggle('popup__input-container_active');
  }else{
    buttonsPopup[n-1].classList.add("popup__button-money_active");
    buttonsPopup[n-1].classList.add("popup__money");
  }

}

const formInputContainer = document.querySelector('.form__input-container');
const popupInputContainer = document.querySelector('.popup__input-container');
