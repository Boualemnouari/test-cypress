// éviter de répéter le code : on passe par la commande custom cy.login()
// (définie dans support/commands.js) qui utilise la fixture user.json.
describe("Login", () => {
  // Cas nominal : identifiants valides (fixture) -> redirection dashboard
  it("Connexion réussie", () => {
    cy.login();

    cy.url().should("include", "/dashboard");
  });

  // Cas d'échec : mot de passe volontairement erroné -> on reste sur /login
  // et un message d'erreur (FR ou EN selon la langue du navigateur) s'affiche.
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
