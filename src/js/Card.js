class Card {
    constructor(name, linkPic) {
        this.name = name
        this.linkPic = linkPic
    }

    create() {
        const card = document.createElement('div')
        
        const newCard = document.createElement('div')
        newCard.classList.add('place-card')

        card.appendChild(newCard)

        
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('place-card__image')
        newCard.appendChild(imageContainer)
        imageContainer.setAttribute('style', `background-image: url(${this.linkPic})`)

        
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('place-card__delete-icon')
        imageContainer.appendChild(deleteBtn)
        

        const descriptionContainer = document.createElement('div')
        descriptionContainer.classList.add('place-card__description')
        newCard.appendChild(descriptionContainer)

        
        const newName = document.createElement('h3')
        newName.classList.add('place-card__name')
        newName.textContent = `${this.name}`
        descriptionContainer.appendChild(newName)

        
        const likeBtn = document.createElement('button')
        likeBtn.classList.add('place-card__like-icon')
        descriptionContainer.appendChild(likeBtn)

        return newCard
    }

    like(event) {
        if (event.target.classList.contains('place-card__like-icon')) {
            event.target.classList.toggle('place-card__like-icon_liked');
        }
    }
        

   remove(event) {      
        if (event.target.classList.contains('place-card__delete-icon')) {
                    this.placeCard = event.target.parentElement.parentElement;
                    document.querySelector('.places-list').removeChild(this.placeCard);
        }
    }
}
