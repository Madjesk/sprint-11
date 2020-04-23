import FormValidator from './FormValidator';

class Popup {   
  popupIsOpened(element) {
    element.classList.add('popup_is-opened');
  }

  disactivateButton(element) {
      element.classList.remove('popup__button_active');
  } 
  
  open(event) {
    //открытие попапа с добавлением новых карточек
    if (event.target.classList.contains('user-info__button')) {
      popup.popupIsOpened(popupWindowCard);
      form.reset();
      popup.disactivateButton(popupWindowCard.querySelector('.popup__button'));
      const addValidity = new FormValidator(form);
      addValidity.setEventListeners();
    }
    //открытие попапа редактировать профиль
    if (event.target.classList.contains('user-info__edit')) {
      inputUserName.setAttribute('value', userName.textContent);
      inputUserAbout.setAttribute('value', userJob.textContent);
      popup.popupIsOpened(popupWindowEdit);
      document.forms.edit.reset();
      popup.disactivateButton(popupWindowEdit.querySelector('.popup__button'));
      popupWindowEdit.querySelector('.popup__button').setAttribute('disabled', true);
      const editValidity = new FormValidator(formEdit);
      editValidity.setEventListeners();
    }

    //открытие фотографий
    if (event.target.classList.contains('place-card__image')) {
      const popupWindow = document.querySelector('.popup__image');
      const picLink = event.target.attributes.style.value;
      const picElement = document.querySelector('.popup__photo');

      picElement.setAttribute('src', picLink.slice(22, -1));
      popup.popupIsOpened(popupWindow);
    }
  }

  //Закрытие попапа
  close(event) {
    if (event.type === 'submit') {
      event.target.closest('.popup').classList.remove('popup_is-opened');
      event.preventDefault();
    }
    if (event.target.classList.contains('popup__close')) {
      event.target.closest('.popup').classList.remove('popup_is-opened');
    }

  }
}

const popup = new Popup();

export const popupWindowCard = document.querySelector('.popup-add-card');
export const popupWindowEdit = document.querySelector('.edit');
export const inputUserName = document.querySelector('.edit__input_type_name');
export const inputUserAbout = document.querySelector('.edit__input_type_link-url');
export const userName = document.querySelector('.user-info__name');
export const userJob = document.querySelector('.user-info__job');
const popupWindowPic = document.querySelector('.popup__image');
const form = document.forms.new;
const formEdit = document.forms.edit;

document.addEventListener('click', popup.open);
popupWindowCard.addEventListener('click', popup.close);
popupWindowPic.addEventListener('click', popup.close);
popupWindowEdit.addEventListener('click', popup.close);

