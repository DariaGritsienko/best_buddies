class Popup {
  constructor(popup, container, anotherContainer){
    this.popup = popup;
    this.container = container;
    this.anotherContainer = anotherContainer;
  }
  thanks(){
    this.popup.classList.toggle('popup_is-opened');
    this.container.style.display = 'none';
    this.anotherContainer.style.display = 'flex';
  }
  social(){
    if (this.container.style.display === 'flex') {
      this.container.style.display ='none';
      this.anotherContainer.classList.toggle('header__social_active', false);
    }else{
      this.container.style.display ='flex';
      this.anotherContainer.classList.toggle('header__social_active');
    }
  }
  popupOpen(){
    this.popup.classList.toggle('popup_is-opened');
    this.container.style.display = 'flex';
    this.anotherContainer.style.display = 'none';
  }
  popupClose(){
    this.popup.classList.toggle('popup_is-opened', false);
    this.container.style.display = 'none';
    this.anotherContainer.style.display = 'none';
  }
}

const popup = new Popup(document.querySelector('.popup'), document.querySelector('.popup__container'), document.querySelector('.popup__container-thanks'));
const anotherPopup = new Popup(document.querySelector('.popup'), document.querySelector('.header__container-icon'), document.querySelector('.header__social'));
