/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frames Test', function(){
    it('Demo example', function(){
        // cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.visit('http://www.qaclickacademy.com/practice.php')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()


    })
})