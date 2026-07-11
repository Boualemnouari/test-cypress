export const loginSelectors = {
	username: '[data-testid="signin-username"]',
	password: '[data-testid="signin-password"]',
	submit: '[data-testid="signin-submit"]',
};

export const fillLoginForm = (username, password) => {
	cy.get(loginSelectors.username).clear().type(String(username).trim());
	cy.get(loginSelectors.password).clear().type(String(password).trim());
};

export const loginWithUser = (user) => {
	cy.visit('/login');
	fillLoginForm(user.username, user.password);
	cy.get(loginSelectors.submit).click();
};

export const loginWithFixture = (overrides = {}) => {
	cy.fixture('user').then((fixtureUser) => {
		loginWithUser({ ...fixtureUser, ...overrides });
	});
};
