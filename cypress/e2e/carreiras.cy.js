describe('Página de Carreiras - Validação de Conteúdo e acesso às vagas', () => {

  context('Dado que o usuário acessa a página de Carreiras', () => {
    beforeEach(() => {
      cy.viewport(1366, 768);
      cy.visit('https://nexdom.tec.br/carreiras/');
    });

    context('Quando a página é carregada corretamente', () => {
      it('Então deve exibir o conteúdo principal e o botão para acessar as vagas', () => {
        cy.validarPaginaCarreiras();
      });
    });

    context('Quando o usuário clica no botão "Acessar as vagas"', () => {
      it('Então o botão deve conter o link correto para o site de vagas da Nexdom', () => {
        cy.contains('Acessar as vagas')
          .should('have.attr', 'href')
          .and('include', 'vempranexdom.gupy.io');
      });
    });
  });
});
