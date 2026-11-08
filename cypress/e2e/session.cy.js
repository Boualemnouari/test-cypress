import { fillLoginForm, loginSelectors } from "../support/Login";

// Vérifie qu'un clic sur "Se connecter" sans remplir le formulaire
// ne permet pas de se connecter (on doit rester sur /login).
describe("clique “Se connecter” sans rien saisir", () => {
  it("ne passe pas", () => {
    cy.visit("/login");
    // Les champs doivent être vides avant la soumission
    cy.get(loginSelectors.username).should("have.value", "");
    cy.get(loginSelectors.password).should("have.value", "");
    cy.get(loginSelectors.submit).click();
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
      // Espaces réellement tapés autour des identifiants
      fillLoginForm(` ${user.username} `, ` ${user.password} `);
      cy.get(loginSelectors.submit).click();
      // La connexion doit aboutir sur le dashboard
      cy.url().should("include", "/dashboard");
    });
  });
});
