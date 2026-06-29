describe("template spec", () => {
  it.skip("passes", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe");
    cy.get('[data-testid="signin-password"]').type("s3cret");
    cy.get('[data-testid="signin-submit"]').click();
    //cy.get('[data-testid="signin-password"]').type("s3cret{enter}");une autre methode de mettre un MP et valider
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/dashboard");
  });
});
it.only("ne passes pas ", () => {
  cy.visit("/login");
  cy.get('[data-testid="signin-username"]').type("johndoe");
  cy.get('[data-testid="signin-password"]').type("wrongpassword123");
  cy.get('[data-testid="signin-submit"]').click();
  //cy.get('[data-testid="signin-password"]').type("s3cret{enter}");une autre methode de mettre un MP et valider
  cy.url().should("include", "/login");
});
//éviter de répéter le code
describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe");
  });

  it("Connexion réussie", () => {
    cy.get('[data-testid="signin-password"]').type("s3cret");
    cy.get('[data-testid="signin-submit"]').click();

    cy.url().should("include", "/dashboard");
  });

  it.only("Connexion refusée", () => {
    cy.get('[data-testid="signin-password"]').type("wrongpassword123");
    cy.get('[data-testid="signin-submit"]').click();

    cy.url().should("include", "/login");
  });
});
