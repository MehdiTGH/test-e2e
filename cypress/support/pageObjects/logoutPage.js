export const getInputEmail = () => cy.get('[id="email_login"]');

export const getInputPassword = () => cy.get('[data-testid="login-field-password"]');

export const getBtnSubmit = () => cy.get('[data-testid="login-button-submit"]');

export const getBtnAvatarProfil = () => cy.get('[data-testid="header-user-links-toggle"]');

export const getBtnLogoutUser = () => cy.get('[data-testid="header-user-link-signout"]');

export const getTitleLogin = () => cy.get('[data-testid="session-title"]');
