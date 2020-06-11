/// <reference types="cypress" />

describe('My first Test Suite', function () {

it('My first test case', function () {

// popups
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()

// window:alert
cy.on('window:alert',(str) => 
{
// Mocha
expect(str).to.equal("Hello , share this practice page and share your knowledge")
})

// window:confirm
cy.on('window:confirm',(str) => 
{
// Mocha
expect(str).to.equal('Hello , Are you sure you want to confirm?') // 
})

cy.get("#opentab").invoke('removeAttr','target').click() // pokrecem funkciju za remove target iz doma pa klik
cy.url().should('include','rahulshettyacademy') // proveravam da li url include rahul...
cy.go('back') // idem nazad jedan korak, go back

})

})
