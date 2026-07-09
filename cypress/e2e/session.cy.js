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
    cy.fixture("user").then((user) => {
      cy.visit("/login");
      cy.get('[data-testid="signin-username"]').type(`${user.username} `.trim());
      cy.get('[data-testid="signin-password"]').type(` ${user.password}`.trim());
      cy.get('[data-testid="signin-submit"]').click();
      cy.url().should("include", "/dashboard");
    });
  });
});
const config = {
  login: {
    selector: "#login-btn",
    url: "/login"
  },
  transactions: {
    selector: "#transactions-btn",
    url: "/transactions"
  },
  settings: {
    selector: "#settings-btn",
    url: "/settings"
  }
};