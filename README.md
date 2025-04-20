# 🚀 Testes E2E com Cypress – Nexdom

Este projeto de automação de testes E2E utiliza [Cypress](https://www.cypress.io/) para validar funcionalidades do site Nexdom.
---

## 📥 Download do projeto

1. **Clone o repositório**

   git clone https://github.com/monielenunes/cypress-e2e-nexdom.git

Acesse a pasta do projeto:
cd nexdom-e2e-tests

🔧 Instalação
Certifique-se de que você tem o Node.js instalado (versão 14 ou superior).

Instale as dependências do projeto:

npm install

Instale o Faker para gerar dados fictícios usados nos testes:

npm install faker --save-dev

▶️ Como executar os testes

1. Executar via terminal:

npx cypress run

2. Executar com interface gráfica do Cypress:

npx cypress open
A interface gráfica permitirá que você visualize a execução dos testes em tempo real.

📁 Estrutura do projeto

nexdom-e2e-tests/
├── cypress/       
│   ├── e2e/                
│   │   ├── carreiras.cy.js
│   │   ├── contato.cy.js
│   │   └── home.cy.js
│   ├── fixtures/           
│   └── support/            
├── cypress.config.js       
├── package.json            
├── package-lock.json       
└── README.md               