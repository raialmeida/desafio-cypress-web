Feature: Adicionar produto no carrinho

    Realizar uma pesquisa com o conteúdo "Faded Short Sleeve" e adicionar ao carrinho o
    primeiro produto comprável a partir dos resultados. Validar se o produto foi adicionado
    corretamente (com suas devidas validações)

    Scenario: Pesquisar o produto e adicionar o primeiro comprável no carrinho a partir do resultados

        Given Que quando pesquisar o produto "Faded Short Sleeve"
        When Exibe o resultado da pesquisa
        When Adiciona o primeiro produto da lista no carrrinho
        Then Deve conter o produto no carrinho