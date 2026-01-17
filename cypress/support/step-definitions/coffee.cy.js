import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import CoffeeMenuPage from '../../support/pages/coffeeMenu.page'
import CoffeeCartPage from '../../support/pages/coffeeCart.page'
import CoffeePagamentoPage from '../../support/pages/coffeePagamento.page'
Given('que o usuario esteja na pagina do coffee cart', () =>{
    cy.visit('/')
})

When('ele adiciona 3 cafes diferentes ao carrinho', () =>{
    CoffeeMenuPage.adicionarCafes()
})
And('valida a aparicao da oferta', () =>{
    CoffeeMenuPage.validarOfertaCafe()
})
And('aceita a oferta', () => {
    CoffeeMenuPage.aceitarOfertaCafe()
})
And('valida que os itens estao presentes no carrinho com os valores certos', () =>{
    CoffeeCartPage.cartPage()
    CoffeeCartPage.validarItensCart()
})
And('remove 1 item do carrinho', () => {
    CoffeeCartPage.removerItemCart('Americano')
})
Then('preenche os dados de pagamento', () =>{
    CoffeePagamentoPage.irPagamento()
    CoffeePagamentoPage.preencherDadosPagamento()
})
And('valida a mensagem de sucesso na compra', () =>{
    CoffeePagamentoPage.validarMensagemSucesso()
})
