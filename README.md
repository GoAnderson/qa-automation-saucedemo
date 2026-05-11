# 🚀 Estrutura Base do Projeto Cypress

```bash
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
```

---

# 🚀 Objetivo do Repositório

Este repositório foi criado como estrutura base para projetos de automação E2E utilizando Cypress, servindo como modelo reutilizável para estudos, portfólio e evolução contínua em automação de testes.

---

# 📚 Objetivo da Estrutura

O projeto utiliza uma estrutura baseada em **Page Object Model (POM)**, visando:

- Melhor organização dos testes
- Reutilização de código
- Facilidade de manutenção
- Separação de responsabilidades
- Escalabilidade para futuros projetos

---

# 📂 Organização dos Arquivos

## 📁 e2e/

Responsável pelos cenários de teste automatizados.

Arquivos com extensão `.cy.js` representam os testes executados pelo Cypress.

### Exemplo:

```javascript
login.cy.js
```

---

## 📁 fixtures/

Responsável pelas massas de dados utilizadas nos testes.

Arquivos `.json` armazenam dados reutilizáveis como:

- credenciais
- usuários
- payloads
- informações mockadas

### Exemplo:

```json
{
  "username": "standard_user",
  "password": "secret_sauce"
}
```

---

## 📁 support/pages/

Responsável pela implementação do **Page Object Model (POM)**.

Cada página contém:

- elementos reutilizáveis
- seletores
- métodos/actions

---

# 🧱 Estrutura Base da Page

```javascript
const elements = {

    inputs: {
        username: '',
        password: ''
    },

    buttons: {
        loginButton: ''
    },

    messages: {

    }

}

export default {

    fillUsername(username) {

    },

    fillPassword(password) {

    },

    clickLogin() {

    }

}
```

---

# 🧪 Estrutura Base do Teste

```javascript
const credentials = require('../fixtures/credenciais-validas.json')

import login_page from '../support/pages/login_page'

describe('Login', () => {

    beforeEach(() => {

    })

    it('Deve realizar login com sucesso', () => {

    })

})
```

---

# 📐 Convenções Utilizadas

- Arquivos de teste: `.cy.js`
- Fixtures: `.json`
- Pages: `.js`
- Massa de dados separada dos cenários
- Métodos nomeados por ação/comportamento
- Estrutura baseada em reutilização e manutenção

---

# ✅ Boas Práticas Utilizadas

- Estrutura baseada em Page Object Model (POM)
- Separação entre massa de dados e cenários
- Reutilização de métodos
- Organização escalável para automação E2E
- Melhor legibilidade e manutenção dos testes

---

# 🛠️ Tecnologias

- Cypress
- JavaScript
- Node.js
