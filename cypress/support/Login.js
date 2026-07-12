// Sélecteurs data-testid du formulaire de connexion, centralisés ici
// pour éviter de les dupliquer dans chaque test.
export const loginSelectors = {
  username: '[data-testid="signin-username"]',
  password: '[data-testid="signin-password"]',
  submit: '[data-testid="signin-submit"]',
};

// Remplit les champs username/password du formulaire.
// clear() garantit un champ vide avant de taper, trim() retire les espaces
// accidentels (utile pour les tests de tolérance aux espaces).
export const fillLoginForm = (username, password) => {
  cy.get(loginSelectors.username).clear().type(String(username).trim());
  cy.get(loginSelectors.password).clear().type(String(password).trim());
};

// Se rend sur la page de login, remplit le formulaire avec l'utilisateur
// fourni puis soumet.
export const loginWithUser = (user) => {
  cy.visit("/login");
  fillLoginForm(user.username, user.password);
  cy.get(loginSelectors.submit).click();
};

// Charge l'utilisateur de test depuis la fixture "user.json" et se connecte
// avec celui-ci. `overrides` permet de remplacer certains champs
// (ex: password erroné pour tester un échec de connexion).
export const loginWithFixture = (overrides = {}) => {
  cy.fixture("user").then((fixtureUser) => {
    loginWithUser({ ...fixtureUser, ...overrides });
  });
};
