describe("Bénéficiaires", () => {
  it("test", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe");
    cy.get('[data-testid="signin-password"]').type("s3cret");
    cy.get('[data-testid="signin-submit"]').click();
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/dashboard");
    cy.get('[data-testid="nav-beneficiaries"]').click();
    cy.url().should("include", "/beneficiaries");
  });
});
