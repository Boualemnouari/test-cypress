describe("clique “Se connecter” sans rien saisir", () => {
  it("ne passe pas", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').should("have.value", "");
    cy.get('[data-testid="signin-password"]').should("have.value", "");
    cy.get('[data-testid="signin-submit"]').click();
    cy.url().should("include", "/login");
  });
});
describe("connexion ok meme avec des espaces", () => {
  it("passe", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe".trim());
    cy.get('[data-testid="signin-password"]').type("s3cret".trim());
    cy.get('[data-testid="signin-submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
