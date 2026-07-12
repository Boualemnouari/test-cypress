// Configuration principale de Cypress pour ce projet
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Désactive la lecture des variables d'environnement Cypress (Cypress.env)
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // Point d'entrée pour brancher des listeners Node (tâches, plugins, etc.)
      // implement node event listeners here
    },
    // URL de base utilisée par cy.visit() dans tous les tests e2e
    baseUrl: "https://zotobank.zotomatise.com",
  },
});
/// <reference types="cypress" />
