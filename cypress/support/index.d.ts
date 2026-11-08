/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Connecte l'utilisateur de la fixture user.json.
     * @example cy.login({ password: "faux" })
     */
    login(overrides?: {
      username?: string;
      password?: string;
    }): Chainable<void>;
  }
}
