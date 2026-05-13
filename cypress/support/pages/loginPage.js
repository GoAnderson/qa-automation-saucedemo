const elements = {
    inputs: {
        username: '[data-test="username"]',
        password: '[data-test="password"]'
    },

    buttons: {
        loginButton: '[data-test="login-button"]'
    },

    messages: {
        invalidCredentials: '[data-test="error"]',
    },
    texts: {
        invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
        requiredCredentials: 'Epic sadface: Username is required'

    }
}

export default {

    // Acessar a Página de Login
    accessLoginPage(){
        cy.visit('/')
    },

    // Assert na Página de Login
    assertLoginPage(){
        cy.url().should('include', 'saucedemo.com')

        cy.get(elements.buttons.loginButton)
            .should('be.visible')
    },

    
    // Preencher o username
    typeUsername(username) {
        cy.get(elements.inputs.username)
            .should('be.visible')
            .clear()
            .type(username)
    },

    // Preencher o password
    typePassword(password) {
        cy.get(elements.inputs.password)
            .should('be.visible')
            .clear()
            .type(password)
    },

    // Clicar no botão de Login
    clickLogin() {
        cy.get(elements.buttons.loginButton)
            .should('be.visible')
            .click()
    },

    // Assert na mensagem de username ou senha, incorretos
    assertMessageInvalidCredentials(){
        cy.url().should('include', 'saucedemo.com')

        cy.get(elements.messages.invalidCredentials)
            .should('contain', elements.texts.invalidCredentials)
    },

    // Assert na mensagempelo qual o usuario não colocou nem login nem senha
    assertRequiredFieldsError(){
        cy.url().should('include', 'saucedemo.com')

        cy.get(elements.inputs.username)
            .parent()
            .find('svg')
            .should('be.visible')
    
        cy.get(elements.inputs.password)
            .parent()
            .find('svg')
            .should('be.visible')

        cy.get(elements.messages.invalidCredentials)
            .should('be.visible')
            .and('contain', elements.texts.requiredCredentials)
    },    





}