const CART_PAGE = 'a[href="/cart"]'
const ITEM_CART = 

class CoffeeCartPage{
    cartPage(){
        cy.get(CART_PAGE).should('be.visible').click()
    }
    validarItensCart(){
        cy.get('.router-link-active').should('have.length',4)
        cy.contains(ITEM_CART,'(Discounted) Mocha').should('be.visible').and('contain.text', '$4')
        cy.contains(ITEM_CART,'Americano').should('be.visible').and('contain.text', '$7')
        cy.contains(ITEM_CART,'Espresso_Con Panna').should('be.visible').and('contain.text', '$14')
        cy.contains(ITEM_CART,'Cafe_Latte').should('be.visible').and('contain.text', '$16')
    } 



}

export default new CoffeeCartPage()