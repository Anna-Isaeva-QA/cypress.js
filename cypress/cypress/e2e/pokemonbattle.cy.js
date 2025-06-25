
describe('Проверка покупки нового аватара', function () {   

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/login');   // зайти на сайт

         cy.get('#k_email').type('USER_LOGIN'); // ввод верного логина
         cy.get('#k_password').type('USER_PASSWORD'); // ввод верного пароля
        cy.get('.MuiButton-root').click();  // нажимаем кнопку Войти
         cy.wait(2000);      
         cy.get('.header_card_trainer').click();   // Клик в шапке на аву тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('2254 5677 6544 333');   // вводим номер карты
         cy.get('.card_csv').type('125');               // вводим CVV карты
         cy.get('.card_date').type('1226');            // вводим срок действия карты
         cy.get('.card_name').type('VIOLA');          // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');    // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });
