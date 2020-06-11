/// <reference types="cypress" />

describe('My first Test Suite', function () {

it('My first test case', function () {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


cy.get('div.mouse-hover-content').invoke('show') // prikazace skrivene metode, skrivene dugmice
cy.contains('Top').click() // kliknuce
// cy.contains('Top').click({force: true}) // uspece da klikne ako ne pokrenem invoke show
cy.url().should('include','top')
    
})
    
})