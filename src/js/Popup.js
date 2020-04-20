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
/* 
* Надо исправить: Код разбит на разные файлы, но в отдельных файлах
* глобальные переменные должны быть скрыты (обернуты в IIFE или просто функцию)
* Объявлять новые переменные или инициализировать классы лучше в одном из файлов
* как пример, создайте для этого index.js или script.js
*/

