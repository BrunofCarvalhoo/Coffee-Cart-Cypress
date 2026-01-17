#utf-8
#language: pt

Funcionalidade: Comprar cafe

    Cenario: Comprar 3 cafes diferentes 
        Dado que o usuario esteja na pagina do coffee cart
        Quando ele adiciona 3 cafes diferentes ao carrinho
        E valida a aparicao da oferta
        E aceita a oferta
        E valida que os itens estao presentes no carrinho com os valores certos
        E remove 1 item do carrinho
        Entao preenche os dados de pagamento
        E valida a mensagem de sucesso na compra
