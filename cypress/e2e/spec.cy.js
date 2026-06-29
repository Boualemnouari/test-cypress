describe("template spec", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe");
    cy.get('[data-testid="signin-password"]').type("s3cret");
    cy.get('[data-testid="signin-submit"]').click();
    //cy.get('[data-testid="signin-password"]').type("s3cret{enter}");une autre methode de mettre un MP et valider
    cy.url().should("not.include", "/login");
    cy.url().should("include", "/dashboard");
  });
});
