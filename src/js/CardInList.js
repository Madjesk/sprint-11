import Card from './Card';
export default class CardInList {
    constructor(container, item) {
        this.container = container
        this.item = item
        this.render()
    }

    //Рендер карточек
    render() {
        const newCards = new Card(this.item.name, this.item.link)
        this.container.appendChild(newCards.create())
    }
}

