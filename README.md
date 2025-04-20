🚀 Testes Automatizados com Cypress – Nexdom

Este projeto utiliza o Cypress para realizar testes automatizados nas funcionalidades do site Nexdom.

 Clone e Instalação

1. 🔁 Clone o repositório

git clone https://github.com/monielenunes/cypress-e2e-nexdom.git
cd nexdom-e2e-tests

2.  Instale as dependências

Certifique-se de ter o Node.js instalado (versão 14 ou superior).

npm install

3.  Instale o Faker para gerar dados fictícios nos testes

npm install faker --save-dev

▶️ Executando os Testes

🔧 Via terminal

npx cypress run

💾 Com interface gráfica do Cypress

npx cypress open

A interface gráfica permite visualizar a execução dos testes em tempo real.

📁 Estrutura do Projeto

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


