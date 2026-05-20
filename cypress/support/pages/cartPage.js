const elements = {
    inputs: {
        username: '[data-test="username"]',
        password: '[data-test="password"]'
    },

    labels: {
        cartLabel: '.cart_item_label'
    }
}

export default {

    // Verificar que entrou na página do inventário(pós login)
    assertCartPage(productName){
        cy.url().should('include', '/cart.html')

        cy.contains(elements.labels.cartLabel, productName)
            .should('be.visible')
    }
}