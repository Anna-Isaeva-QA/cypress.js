describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку "войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авт. есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю

    })
   
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#forgotEmailButton').click(); // нажала на кнопку "забыли пароль?"
        cy.get('#mailForgot').type('ger@dolnikov.ru'); // ввела НЕверный логин
        cy.get('#restoreEmailButton').click(); // нажала кнопку "отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю, что после нажатия "отправить код" есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // ввела верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ввела НЕверный пароль
        cy.get('#loginButton').click(); // нажала на кнопку "войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после нажатия "войти" есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#mail').type('germ@dolnikov.ru'); // ввела НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку "войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после нажатия "войти" есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('Негативный кейс валидации (логин без @)', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#mail').type('germandolnikov.ru'); // ввела  логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку "войти"

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после нажатия "войти" есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки "Восстановите пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввела  логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // ввела верный пароль
        cy.get('#loginButton').click(); // нажала на кнопку "войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после нажатия "войти" есть текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

})