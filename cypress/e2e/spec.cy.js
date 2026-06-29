describe("template spec", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.get('[data-testid="signin-username"]').type("johndoe");
    cy.get('[data-testid="signin-password"]').type("password123");
    cy.get('[data-testid="signin-button"]').click();
  });
});
