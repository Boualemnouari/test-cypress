describe("Bénéficiaires", () => {
  it("test", () => {
    cy.loginnew();
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/dashboard");
    cy.get('[data-testid="nav-beneficiaries"]').click();
    cy.url().should("include", "/beneficiaries");
    cy.contains("h1", "Bénéficiaires").should("be.visible");
    cy.get('[data-testid="beneficiary-new"]').click();
    cy.get(".text-gray-500.text-sm").contains(
      "Enregistre les personnes à qui tu envoies de l'argent souvent pour les retrouver en un clic au moment d'un virement.",
    );
  });
});
