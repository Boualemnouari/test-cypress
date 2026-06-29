describe("clique “Se connecter” sans rien saisir", () => {
  it("ne passe pas", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').should("have.value", "");
    cy.get('[data-testid="signin-password"]').should("have.value", "");
    cy.get('[data-testid="signin-submit"]').click();
    cy.url().should("include", "/login");
  });
});
