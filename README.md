<<<<<<< HEAD
# 🚀 Testes com Cypress – Nexdom

Este projeto de automação de testes utiliza [Cypress](https://www.cypress.io/) para validar funcionalidades do site Nexdom.
=======

# 🚀 Testes E2E com Cypress – Nexdom

Este projeto de automação de testes E2E utiliza o [Cypress](https://www.cypress.io/) para validar funcionalidades do site Nexdom.

>>>>>>> 921c264a2f58d008d11d3b03f522065a1af0155a
---

## 📥 Como baixar o projeto

Para começar, você precisa **clonar o repositório** em sua máquina local.

1. **Clone o repositório**

   No seu terminal, execute o seguinte comando para clonar o repositório:

   `git clone https://github.com/monielenunes/cypress-e2e-nexdom.git`

2. **Acesse a pasta do projeto**

   Após clonar o repositório, acesse a pasta onde o projeto foi salvo:

   `cd cypress-e2e-nexdom`


---

## 🔧 Instalação

1. **Certifique-se de que o Node.js está instalado**

   O projeto exige que o Node.js esteja instalado na sua máquina. Você pode verificar se ele está instalado e qual versão você está utilizando com o comando:

   `node -v`

   Caso não tenha o Node.js instalado, você pode fazer o download [aqui](https://nodejs.org/).

2. **Instale as dependências do projeto**

   Agora, instale as dependências necessárias com o comando:

   `npm install`

3. **Instale o Faker para gerar dados fictícios**

   O projeto utiliza o Faker para gerar dados falsos nos testes. Instale o Faker com o seguinte comando:

   `npm install faker --save-dev`

---

## ▶️ Como executar os testes

1. **Executar via terminal**

   Para rodar os testes diretamente no terminal, use o comando:

   `npx cypress run`

2. **Executar com a interface gráfica do Cypress**

   Se preferir visualizar a execução dos testes de forma interativa, use:

   `npx cypress open`

   A interface gráfica permitirá que você veja os testes em tempo real.

---

## 📁 Estrutura do projeto

A estrutura do repositório é organizada da seguinte forma:

```
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
```

---
