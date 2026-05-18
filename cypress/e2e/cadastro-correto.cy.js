
describe('Preenche corretamente os dados de cadastro do usuário', () => {
  beforeEach(()=>{
    cy.viewport(1920, 1080);
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Digita o nome, e-mail, senha e clica em cadastrar', () => {
    cy.cadastrar('Ana Maria', 'ana@email.com', 'Senha123')
  })
})