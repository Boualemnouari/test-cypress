describe("Bénéficiaires", () => {
  beforeEach(() => {
    cy.login();
    cy.url().should("include", "/dashboard");
  });

  it("affiche le formulaire de création d'un bénéficiaire", () => {
    cy.get('[data-testid="nav-beneficiaries"]').click();
    cy.url().should("include", "/beneficiaries");
    cy.contains("h1", "Bénéficiaires").should("be.visible");
    cy.get('[data-testid="beneficiary-new"]').click();
    cy.contains(
      "Enregistre les personnes à qui tu envoies de l'argent souvent pour les retrouver en un clic au moment d'un virement.",
    ).should("be.visible");
  });
});
