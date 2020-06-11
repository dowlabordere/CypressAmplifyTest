/// <reference types="cypress" />

describe('My first Test Suite', function () {

it('My first test case', function () {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
    const text=$el.text();
    if(text.includes('Python')){
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){
        // cy.get($el).next().then(function(price){ // i ovo radi umesto gornjeg reda
            const priceText = price.text()
            expect(priceText).to.equal('25')
        })
    }
})

})

})