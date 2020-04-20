const cardList = document.querySelector('.places-list');
const popupWindowCard = document.querySelector('.popup-add-card');
const popupWindowEdit = document.querySelector('.edit');
const popupWindowPic = document.querySelector('.popup__image');
const form = document.forms.new;
const formEdit = document.forms.edit;
const errors = {
  validationEmpty: 'Это обязательно поле',
  validationLenght: 'Должно быть от 2 до 30 символов',
  validationLink: 'Здесь должна быть ссылка'
};
const popupEditForm = document.querySelector('.edit__form');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');
const inputUserName = document.querySelector('.edit__input_type_name');
const inputUserAbout = document.querySelector('.edit__input_type_link-url');
const popupForm = document.querySelector('.popup__form');
const placeName = document.querySelector('.popup__input_type_name');
const placeImage = document.querySelector('.popup__input_type_link-url');
const serverUrl = 'http://praktikum.tk/cohort8'

const popup = new Popup();

document.addEventListener('click', popup.open);
popupWindowCard.addEventListener('click', popup.close);
popupWindowPic.addEventListener('click', popup.close);
popupWindowEdit.addEventListener('click', popup.close);

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

api.getUser(serverUrl);

api.getCards(serverUrl)
  .then(data => {
    return data.map(item => new CardInList(cardList, item))
  })
  .catch((err) => {
    console.log(err)
  })

popupEditForm.addEventListener('submit', function (event) {
  event.preventDefault()

  api.changeUserInfo(serverUrl)
    .then((result) => {
      popupWindowEdit.classList.remove('edit_is-opened');

      document.querySelector('.user-info__name').textContent = result.name;
      document.querySelector('.user-info__job').textContent = result.about;

      popup.close(event);
    })
    .catch((err) => {
      console.log(err)
    })
})



const card = new Card();
cardList.addEventListener('click', card.remove );
cardList.addEventListener('click', card.like );
































