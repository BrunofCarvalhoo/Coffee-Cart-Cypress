const CHECKOUT = '[data-test="checkout"]'
const NOME = '#name'
const EMAIL = '#email'
const PROMOCAO_CHECKBOX = '#promotion'
const BOTAO_SUBMIT = '#submit-payment'
class CoffeePagamentoPage{
    irPagamento(){
        cy.get(CHECKOUT).should('be.visible').click()
    }
    preencherDadosPagamento(){
        cy.get(NOME).should('be.visible').type(Cypress.env('name'))
        cy.get(EMAIL).should('be.visible').type(Cypress.env('email'))
        cy.get(PROMOCAO_CHECKBOX).check().should('be.checked')
        cy.get(BOTAO_SUBMIT).should('be.visible').click()
    }
    validarMensagemSucesso(){
        cy.contains('Thanks for your purchase. Please check your email for payment.').should('be.visible')
    }

}

export default new CoffeePagamentoPage()