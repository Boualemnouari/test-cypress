describe("template spec", () => {
  it("passes", () => {
    cy.visit("/login");
    cy.url().should("include", "/login");
  });
});
