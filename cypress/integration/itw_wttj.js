
import * as loginData from '../../cypress/fixtures/data/data-user.json';
import * as apiRegistrationData from '../../cypress/fixtures/data/data-api-registration.json';
import * as uploadData from '../../cypress/fixtures/data/data-upload.json';

describe(`Test Account User informations`, () => {  
  before(() => {

    cy.manageCookiesWTTJ();
    cy.visit(loginData.urlAccount);

  });
  it(`login for user ${loginData.email}`, () => {

    cy.LoginUserAccount(loginData.email,loginData.password);

  });
  it(`update avatar :  ${uploadData.urlImage} from account page and check API response : ${apiRegistrationData.urlRequest} : ${apiRegistrationData.method}`, () => {

    cy.interceptRequest(apiRegistrationData.method,apiRegistrationData.urlRequest, apiRegistrationData.nameRequest);
    cy.uploadFile(uploadData.urlImage);
    cy.submitFormAccount();
    cy.waitRequestAndCheckResp(apiRegistrationData.nameRequest,apiRegistrationData.statusCodeWaiting, apiRegistrationData.responseValue);
    cy.userLogout();
  });
});
