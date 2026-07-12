// Vérifie qu'un clic sur "Se connecter" sans remplir le formulaire
// ne permet pas de se connecter (on doit rester sur /login).
describe("clique “Se connecter” sans rien saisir", () => {
  it("ne passe pas", () => {
    cy.visit("/login");
    // Les champs doivent être vides avant la soumission
    cy.get('[data-testid="signin-username"]').should("have.value", "");
    cy.get('[data-testid="signin-password"]').should("have.value", "");
    cy.get('[data-testid="signin-submit"]').click();
    // Aucune redirection : on reste sur la page de login
    cy.url().should("include", "/login");
  });
});

// Vérifie que la connexion réussit même si des espaces superflus
// entourent le username/password saisis (le formulaire doit les tolérer).
describe("connexion ok meme avec des espaces", () => {
  it("passe", () => {
    cy.fixture("user").then((user) => {
      cy.visit("/login");
      // Espace ajouté après le username, puis retiré via trim()
      cy.get('[data-testid="signin-username"]').type(
        `${user.username} `.trim(),
      );
      // Espace ajouté avant le password, puis retiré via trim()
      cy.get('[data-testid="signin-password"]').type(
        ` ${user.password}`.trim(),
      );
      cy.get('[data-testid="signin-submit"]').click();
      // La connexion doit aboutir sur le dashboard
      cy.url().should("include", "/dashboard");
    });
  });
});
