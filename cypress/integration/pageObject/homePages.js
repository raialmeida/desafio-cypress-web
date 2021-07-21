/// <reference types="cypress" />

import homeElements from '../Elements/homeElements'
const elements = new homeElements()

export default class homepages {

    pesquisarProduto(nomeProduto) {
        cy.get(elements.campoPesquisa()).type(nomeProduto)
    }

    btnPesquisarProduto() {
        cy.get(elements.btnPesquisar()).click()
    }

    visualizarProduto() {
        cy.get(elements.visualizarProduto()).contains('More').click({ force: true })
    }

    adicionarProdutoCarrinho() {
        cy.get(elements.adicionarProduto()).click()
        cy.contains('Product successfully added to your shopping cart').should('be.visible')
    }

    acessarCarrinho() {
        cy.get(elements.checkoutCarrinho()).click()
    }
}