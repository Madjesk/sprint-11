class Api {
    constructor (authorization) {
        this.authorization = authorization
    }
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

             // Надо исправить:  Не переносите и не дублируйте реализацию в  класс Api, С класса можно только возвращать данные. Это надо удалить   
                           
            .catch((err) => {
                console.log(err)
            })
    }

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

	/**
    * Здравствуйте.
    * Надо исправить: Название файлов должна быть идентично названию класса Например если класс назвается FormValidator, то файл должен называться FormValidator
    * С большой буквы+
    * 
     *  *
     * Самый правильный способ, как пример указан в брифе
     // url лучше передавать при инициализации класса в конструктор
     fetch(`url/cards`,
                {
       headers: {
                        // ключ который надо передавать в параметрах
      authorization: param.authorization
                    }
                })
      .then(res => {
        if (res.ok) {
       return res.json();
                }
                // если ошибка, переходим в catch
       return Promise.reject(`Ошибка: ${res.status
                }`);
            })
    .then((result) => {
                // обрабатываем результат
                // а точнее возвращает результат работы прямо в тот класс откуда вызывали
            })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
                });
    
 Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта	
    
     * Вызывать же методы класса Api лучше из других классов
     *
     * Стоит отметить, что реализации в классе API быть не должно. Точнее прямого взаимодействия. Методы могут вызываться
     * из других классов и возвращать данные, а работа с этими данными должны быть непосредственно в классах создаваемых в 8 спринте
    *
    * 
    * При добавлении карточки возникает ошибка в консоли+
    * script.js:20 Uncaught TypeError: cardList.addCard is not a function
    at HTMLFormElement.<anonymous> (script.js:20)

    При редактировании профиля подгружаются в попап только первоначальные данные, старые отредактированные данные не подгружаются+

    Лайки и удаление карточек не работает, надо исправить+
    * 
   
   В классе  Popup в методе open есть функции которые надо вынести в отдельные методы класса+
   

    * 
     * работа принимается только при исправлении всех "Надо исправить"
     *
    */

/** 
 * Здравствуйте, одна ошибка осталась.
 * Даже как переменные они глобальные 
    userName.textContent = result.name
    userJob.textContent = result.about 
    Просто вызывайте этот метод из другого класса, а он в свою очередь пускай возвращает данные которые вы сможете использовать
    
 * 
 * 
 */



