import * as loginData from '/Users/mehdi/Desktop/test-inqom/itw/cypress/fixtures/data/data-user.json';
import * as loginPage from '../pageObjects/loginPage.js';
import * as accountPage from '../pageObjects/accountPage.js';
import * as apiRegistrationData from '/Users/mehdi/Desktop/test-inqom/itw/cypress/fixtures/data/data-api-registration.json';
import * as accountData from '/Users/mehdi/Desktop/test-inqom/itw/cypress/fixtures/data/data-account.json';
import * as logoutPage from '../pageObjects/logoutPage.js';


Cypress.Commands.add('LoginUserAccount', (email, password) => {
  cy.url().should('include', loginData.urlSignin);
  loginPage.getInputEmail().should('be.visible').type(email);
  loginPage.getInputPassword().should('be.visible').type(password);
  loginPage.getBtnSubmit().should('be.visible').click();
  cy.url().should('include', loginData.urlAccount);
});

Cypress.Commands.add('uploadFile', (imagePath) => {
  accountPage.getInputTypeFile().attachFile(imagePath);
});

Cypress.Commands.add('interceptRequest', (method, url, name) => {
  cy.intercept(method, url).as(name);
});

Cypress.Commands.add('waitRequestAndCheckResp', (name, statusCodeWaiting, valueChecked) => {
  cy.wait(`@${name}`)
      .then((intercept) => {
        const {statusCode, body} = intercept.response;
        expect(statusCode).to.eq(statusCodeWaiting);
        expect(body.user.avatar.small.url).to.not.equal(valueChecked);
        expect(body.user.avatar.thumb.url).to.not.equal(valueChecked);
        expect(body.user.avatar.url).to.not.equal(valueChecked);
      });
});

Cypress.Commands.add('submitFormAccount', () => {
  accountPage.getBtnSubmit().click();
  accountPage.getWordingPopUpValidate().should('be.visible').contains(accountData.wordingPopInConfirm);
});

Cypress.Commands.add('manageCookiesWTTJ', () => {
  cy.clearCookies();
  Cypress.Cookies.preserveOnce(apiRegistrationData.cookieSession, apiRegistrationData.cookieToken);
});

Cypress.Commands.add('userLogout', () => {
  logoutPage.getBtnAvatarProfil().click();
  logoutPage.getBtnLogoutUser().first().click();
  logoutPage.getTitleLogin().should('be.visible').contains('Bienvenue !');
});
