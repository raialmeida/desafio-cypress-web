/// <reference types="cypress" />

import carrinhoElements from '../Elements/carrinhoElements'
const elements = new carrinhoElements()

export default class carrinho {

    acessarCarrinho() {
        cy.get(elements.visualizarCarrinho()).contains('Cart').click()
    }

    verifcarProdutosCarrinho() {
        cy.get(elements.validarProduto()).should('have.text', '1 Product')
    }
}