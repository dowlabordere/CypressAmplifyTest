/// <reference types="cypress" />

describe('My first Test Suite', function () {

    it('My first test case', function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    cy.get('#opentab').then(function(el){
        const url = el.prop('href')
        cy.visit(url)
    })
    
        
    })
        
})