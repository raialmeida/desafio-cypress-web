/// <reference types="cypress" />

import homepages from '../pageObject/homePages'
import carrinho from '../pageObject/carrinhoPages'

const home = new homepages()
const carrinhoCompras = new carrinho()

beforeEach(() => {
    cy.visit('/')
  })

Given(/^Que quando pesquisar o produto "([^"]*)"$/, (nomeProduto) => {
    home.pesquisarProduto(nomeProduto)
    home.btnPesquisarProduto()
});

When(/^Exibe o resultado da pesquisa$/, () => {
    home.visualizarProduto()
});

When(/^Adiciona o primeiro produto da lista no carrrinho$/, () => {
    home.adicionarProdutoCarrinho()
});

Then(/^Deve conter o produto no carrinho$/, () => {
    home.acessarCarrinho()
    carrinhoCompras.verifcarProdutosCarrinho()
});