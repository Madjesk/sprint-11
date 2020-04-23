import {inputUserName, inputUserAbout, userName, userJob} from './popup.js';
export default class Api {
    constructor (authorization) {
        this.authorization = authorization
    }

    //Получение информации о пользователе 
    getUser(url) {
        return fetch(`${url}/users/me`, {
            headers: {
                authorization: `${this.authorization}`
            }
        })
            .then((result) => {
                console.log(result);
                if (result.ok) {
                    return result.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
            .then((result) => {
                return userName.textContent = result.name, userJob.textContent = result.about;
              })                        
            .catch((err) => {
                console.log(err)
            })
    }

    //Получение карточек
    getCards(url) {
        return fetch(`${url}/cards`, {
            headers: {
                authorization: `${this.authorization}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })

    }

    //Измение информации о пользователе
    changeUserInfo(url) {
        return fetch(`${url}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${inputUserName.value}`,
                about: `${inputUserAbout.value}`
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }

    //Публикация карточек
    postCard (url, nameCard, linkCard) {
        return fetch(`${url}/cards/`, {
            method: 'POST',
            headers: {
                authorization: `${this.authorization}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${nameCard}`,
                link: `${linkCard}`
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
}


