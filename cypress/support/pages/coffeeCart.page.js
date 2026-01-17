const CART_PAGE = 'a[href="/cart"]'
const ITEM_CART = 'ul li'
const CHECKOUT = '[data-test="checkout"]'

class CoffeeCartPage{
    cartPage(){
        cy.get(CART_PAGE).should('be.visible').click()
    }
    validarItensCart(){ 
        cy.get(CART_PAGE).contains('cart (4)').should('be.visible')

        cy.get(ITEM_CART).filter(':visible').contains('(Discounted) Mocha').should('be.visible') 
        cy.get(ITEM_CART).contains('$4.00').should('be.visible') 

        cy.get(ITEM_CART).filter(':visible').contains('Americano').should('be.visible')
        cy.get(ITEM_CART).contains('$7.00').should('be.visible') 
 
        cy.get(ITEM_CART).filter(':visible').contains('Espresso Con Panna').should('be.visible')
        cy.get(ITEM_CART).contains('$14.00').should('be.visible')

        cy.get(ITEM_CART).filter(':visible').contains('Cafe Latte').should('be.visible')
        cy.get(ITEM_CART).contains('$16.00').should('be.visible')


        cy.get(CHECKOUT).should('contain.text', '$41.00')
    } 

    removerItemCart(){
        
    }

}

export default new CoffeeCartPage()