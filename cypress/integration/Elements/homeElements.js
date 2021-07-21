/// <reference types="cypress" />

export default class homeelements {

    campoPesquisa = () => { return '#search_query_top' }
    btnPesquisar = () => { return '#searchbox > .btn' }
    visualizarProduto = () => { return 'a' }
    adicionarProduto = () => { return '#add_to_cart' }
    checkoutCarrinho = () => { return '.button-medium > span' }
}