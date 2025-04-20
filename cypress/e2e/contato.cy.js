describe('Formulário de Contato - Validação do Envio', () => {
  
  context('Dado que o usuário acessa a página de contato da Nexdom', () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.visit('https://nexdom.tec.br/contato');
    });

    context('Quando preenche todos os campos e envia o formulário', () => {
      beforeEach(() => {
        cy.preencherFormularioContato();
        cy.enviarFormularioContato();
      });

      it('Então o usuário deve ver uma mensagem de sucesso indicando que o envio foi realizado com sucesso', () => {
        cy.contains('As suas respostas foram recebidas com sucesso!').should('exist');
      });
    });
  });
});
