/// <reference types="cypress" />
import LoginPage from '../PageObjects/LoginPage'


describe('Login Page test', () => {

    var data;

    before(function(){
        cy.fixture('testsData').then(function(newData){
          data = newData
        })
    })

    it('Checks for loading login page', () => {
        const logInPage = new LoginPage();
        // const url = this.data.stagingEnvURL
        cy.visit(data.stagingEnvURL)
        // Testing is element exists on loaded login page, should be transfered to util checking methods
        // could i send webelement to method for checking, question for Ian
        logInPage.getLogInLabel().should('be.visible').and('contain.text','Log in')
        logInPage.getEmailUsernameInputField().should('be.visible').and('not.contain.text')
        logInPage.getPasswordInputField().should('be.visible').and('not.contain.text')
        logInPage.getStayLogedInLabel().should('be.visible').and('contain.text','stay logged in')
        logInPage.getForgotPasswordButton().should('be.visible').and('contain.text','Forgot your password?')
        logInPage.getLogInButton().should('be.visible')
        logInPage.getEmailUsernameInputField().type('klhkjggjk')

    })
  })