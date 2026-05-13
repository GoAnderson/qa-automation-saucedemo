const elements = {
    inputs: {
        username: '[data-test="username"]',
        password: '[data-test="password"]'
    },

    buttons: {
        loginButton: '[data-test="login-button"]'
    },

    messages: {

    },
    productsTitle: '[data-test="title"]'
}

export default {

    validateInventoryPage(){
        cy.url().should('include', '/inventory.html')

        cy.get(elements.productsTitle)
            .should('be.visible')
            .and('have.text', 'Products')
    },

}