Estrutura Base do Projeto Cypress
cypress/
│
├── e2e/
│   └── login.cy.js
│
├── fixtures/
│   └── credenciais-validas.json
│
├── support/
│   └── pages/
│       └── login_page.js
Objetivo da Estrutura
O projeto utiliza uma estrutura baseada em Page Object Model (POM), visando:

- Melhor organização dos testes
- Reutilização de código
- Facilidade de manutenção
- Separação de responsabilidades
- Escalabilidade para futuros projetos
Organização dos Arquivos
e2e/
Responsável pelos cenários de teste automatizados.

Arquivos com extensão `.cy.js` representam os testes executados pelo Cypress.
Exemplo:
login.cy.js
fixtures/
Responsável pelas massas de dados utilizadas nos testes.

Arquivos `.json` armazenam dados reutilizáveis como:
- credenciais
- usuários
- payloads
- informações mockadas
Exemplo:
credenciais-validas.json
support/pages/
Responsável pela implementação do Page Object Model.

Cada página contém:
- elementos reutilizáveis
- seletores
- métodos/actions
Estrutura Base da Page
const elements = {
    buttons: {},
    inputs: {},
    messages: {}
}

export default {
    exampleMethod() {

    }
}
Estrutura Base do Teste
const credentials = require('../fixtures/credenciais-validas.json')

import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach(() => {

    })

    it('Deve realizar login com sucesso', () => {

    })

})
