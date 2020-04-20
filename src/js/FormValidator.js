class FormValidator {
    constructor(element) {
      this.element = element;
    }
  
    checkInputValidity(event) {
      let errorText = '';
      const errorLabel = event.target.nextElementSibling;
      const showError = () => errorLabel.classList.add('error-message_active');
      if (event.target.validity.valueMissing) {
        errorText = errors.validationEmpty;
        showError();
      }
      if (event.target.validity.tooShort) {
        errorText = errors.validationLenght;
        showError();
      }
      if (event.target.name === 'link' && event.target.validity.typeMismatch) {
        errorText = errors.validationLink;
        showError();
      }
      if (event.target.validity.valid) {
        errorLabel.classList.remove('popup__error_active');
      }
      errorLabel.textContent = errorText;
  
    }
  
    setSubmitButtonState(event) {
      const popupWindow = event.target.closest('.popup');
      const button = popupWindow.querySelector('.popup__button');
      const el1 = event.target.form[0];
      const el2 = event.target.form[1];
      
        button.removeAttribute('disabled');
        button.classList.add('popup__button_active');
        
      if (el1.validity.valid && el2.validity.valid) {
        button.removeAttribute('disabled');
        button.classList.add('popup__button_active');
      } else {
        button.setAttribute('disabled', true);
        button.classList.remove('popup__button_active');
      }
    }
  
    setEventListeners() {
      this.element.addEventListener('input', this.setSubmitButtonState);
      this.element.addEventListener('input', this.checkInputValidity);
    }
  
  
  }


    