/*describe("template spec", () => {
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
  cy.get('[data-testid="signin-password"]').type("password123");
  cy.get('[data-testid="signin-submit"]').click();
  //cy.get('[data-testid="signin-password"]').type("s3cret{enter}");une autre methode de mettre un MP et valider
  cy.url().should("include", "/login");
});*/
//éviter de répéter le code
describe("Login", () => {
  it("Connexion réussie", () => {
    cy.login();

    cy.url().should("include", "/dashboard");
  });

  it("Connexion refusée", () => {
    cy.login({ password: "wrongpassword1" });

    cy.url().should("include", "/login");
    cy.get('[data-testid="signin-error"]').should("be.visible"); // Vérifie que le message d'erreur est affiché
    cy.get('[data-testid="signin-error"]')
      .invoke("text")
      .should((text) => {
        const normalized = text.trim().toLowerCase();
        expect(normalized).to.match(
          /invalid username or password|nom d'utilisateur ou mot de passe incorrect/,
        );
      }); // Vérifie le contenu du message d'erreur (EN/FR)
  });
});
