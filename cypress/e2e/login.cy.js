const validCredentials = require('../fixtures/validCredentials.json')
const invalidCredentials = require('../fixtures/invalidCredentials.json')

import loginPage from '../support/pages/loginPage'
import inventoryPage from '../support/pages/InventoryPage'

describe('Login', () => {

    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.assertLoginPage()
    })

    it('CN01 - Deve realizar login com sucesso', () => {
        loginPage.typeUsername(validCredentials.username)
        loginPage.typePassword(validCredentials.password)
        loginPage.clickLogin()

        inventoryPage.validateInventoryPage()
    })

        it('CN02- Deve exibir mensagem de erro ao realizar login inválido', () => {
        loginPage.typeUsername(invalidCredentials.username)
        loginPage.typePassword(invalidCredentials.password)
        loginPage.clickLogin()

        loginPage.assertMessageInvalidCredentials()
    })

        it('CN03- Campos obrigatórios', () => {
        loginPage.clickLogin()
        loginPage.assertRequiredFieldsError()
    })

})