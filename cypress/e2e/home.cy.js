describe('Página Inicial - Validação do Menu de Navegação', () => {
  
  context('Dado que o usuário acessa a página inicial da Nexdom', () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.visit('https://nexdom.tec.br/');
    });

    it('Então o menu principal deve exibir todos os itens corretamente', () => {
      cy.validarMenuPrincipal();
    });

    context('Quando o usuário clica no item de menu "Contato"', () => {
      beforeEach(() => {
        cy.contains('Contato').click();
      });

      it('Então deve ser redirecionado para a página de contato', () => {
        cy.url().should('include', '/contato');
      });
    });
  });
});
