const elements = {
    inputs: {
        username: '[data-test="username"]',
        password: '[data-test="password"]'
    },

    buttons: {
        loginButton: '[data-test="login-button"]'
    },

    cart: {
        icon: '[data-test="shopping-cart-link"]'
    },
    productsTitle: '[data-test="title"]',
    labels: {
        inventoryItem: '.inventory_item'
    }
}

export default {

    // Verificar que entrou na página do inventário(pós login)
    assertInventoryPage(){
        cy.url().should('include', '/inventory.html')

        cy.get(elements.productsTitle)
            .should('be.visible')
            .and('have.text', 'Products')
    },

    // Adicionar produtos ao carrinho
    addProductToCart(productName) {
        cy.contains(elements.labels.inventoryItem, productName)
            .find('button')
            .click()
    },

    // Validar que o ícone do carrinho está adicionando corretamente
    assertCartQuantity(){
        cy.get(elements.cart.icon)
            .should('have.text', '1')
    },

    // Garantir que está na pagina do carrinho corretamente e o elemento adicionado está lá
    clickCartIcon(){
        cy.get(elements.cart.icon)
            .should('be.visible')
            .click()        
    }


}