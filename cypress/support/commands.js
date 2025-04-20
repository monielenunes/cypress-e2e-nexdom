const { faker } = require('@faker-js/faker');

Cypress.Commands.add('preencherFormularioContato', () => {
  const nome = faker.person.fullName();
  const email = faker.internet.email();
  const empresa = faker.company.name();
  const cargo = faker.person.jobTitle();
  const telefone = '(84)3944-8774';
  const assunto = faker.lorem.paragraph();

  cy.get('input[placeholder="Nome*"]').type(nome);
  cy.get('input[placeholder="E-mail*"]').type(email);
  cy.get('input[placeholder="Empresa*"]').type(empresa);
  cy.get('input[placeholder="Cargo"]').type(cargo);
  cy.get('input[placeholder="Telefone"]').type(telefone);
  cy.get('textarea[placeholder="Assunto"]').type(assunto);
  cy.get('input[type="checkbox"]').check()
});


Cypress.Commands.add('enviarFormularioContato', () => {
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('validarMenuPrincipal', () => {
  cy.contains('Soluções').should('exist');
  cy.contains('.e-n-menu-title-text', /sobre nós/i).should('exist');
  cy.contains('Carreiras').should('exist');
  cy.contains('Contato').should('exist');
});


Cypress.Commands.add('validarPaginaCarreiras', () => {
  cy.contains('Venha fazer parte do time NEXDOM!').should('be.visible');
  cy.contains('Acessar as vagas')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', 'vempranexdom.gupy.io');
});

