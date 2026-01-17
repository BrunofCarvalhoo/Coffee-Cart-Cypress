const COFFEE_AMERICANO = '[data-test= "Americano"]'
const COFFEE_ESPRESOO_CON_PANNA = '[data-test= "Espresso_Con Panna"]'
const COFFEE_LATTE = '[data-test = "Cafe_Latte"]'

class CoffeeMenuPage{

    adicionarCafes(){
        cy.get(COFFEE_AMERICANO).should('be.visible').click()
        cy.get(COFFEE_ESPRESOO_CON_PANNA).should('be.visible').click()
        cy.get(COFFEE_LATTE).should('be.visible').click()
    }

    validarOfertaCafe(){
        cy.contains("It's your lucky day! Get an extra cup of Mocha for $4.").should('be.visible')
        cy.contains('Yes, of course!').should('be.visible')
    }
    aceitarOfertaCafe(){
        cy.get('button.yes').should('be.visible').click()
    }


}

export default new CoffeeMenuPage()