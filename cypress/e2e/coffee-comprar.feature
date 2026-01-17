#utf-8
#language: pt

Funcionalidade: Comprar cafe

    Cenario: Comprar 3 cafes diferentes 
        Dado que o usuario estaja na pagina do coffee cart
        Quando adicionar 3 cafes diferentes ao carrinho
        E validar a aparicao da oferta
        E aceitar a oferta
        E validar os itens estao presentes no carrinho com os valores certos
        #E remover 1 item do carrinho
        #Entao realizar o pagamento
        #E validar a mensagem de sucesso na compra
