describe("clique “Se connecter” sans rien saisir", () => {
  it("ne passe pas", () => {
    cy.visit("/login");
    cy.url().should("include", "/login");
    cy.get('[data-testid="signin-submit"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-testid="signin-error"]').should("be.visible");
  });
});
