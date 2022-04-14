export const getInputEmail = () => cy.get('[id="email_login"]');

export const getInputPassword = () => cy.get('[data-testid="login-field-password"]');

export const getBtnSubmit = () => cy.get('[data-testid="login-button-submit"]');