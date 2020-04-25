import Api from './js/Api';
import Card from './js/Card';
import CardInList from './js/CardInList';
import {Popup, popupWindowEdit, popupWindowCard}  from './js/Popup';
import FormValidator from './js/FormValidator';
import "./style.css";

(function () {

  const cardList = document.querySelector('.places-list');
  const popupEditForm = document.querySelector('.edit__form');
  const popupForm = document.querySelector('.popup__form');
  const placeName = document.querySelector('.popup__input_type_name');
  const placeImage = document.querySelector('.popup__input_type_link-url');
  const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort8' : 'https://praktikum.tk/cohort8';

  //При submit добавляем карточку пользователя
  popupForm.addEventListener('submit', function (event) {
    event.preventDefault()

    api.postCard(serverUrl, placeName.value, placeImage.value)
      .then(() => {
        popupWindowCard.classList.remove('popup_is-opened')

        const card = new Card(placeName.value, placeImage.value,);
        const cardElement = card.element;

        cardList.appendChild(cardElement);
        
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const api = new Api('3bdb40a0-a26a-4ffe-bcfa-ba52232b5f9e');

  //Получаем информацию о юзере
  api.getUser(serverUrl);

  //Получем исходные карточки с сервера
  api.getCards(serverUrl)
    .then(data => {
      return data.map(item => new CardInList(cardList, item))
    })
    .catch((err) => {
      console.log(err)
  })

  //При submit изменяем информацию о пользователе
  popupEditForm.addEventListener('submit', function (event) {
    event.preventDefault()

    api.changeUserInfo(serverUrl)
      .then((result) => {
        popupWindowEdit.classList.remove('popup_is-opened');
    
        document.querySelector('.user-info__name').textContent = result.name;
        document.querySelector('.user-info__job').textContent = result.about;

      })
      .catch((err) => {
        console.log(err)
      })
  })

  const card = new Card();
  cardList.addEventListener('click', card.remove );
  cardList.addEventListener('click', card.like );

})();






























