/// <reference types="cypress" />
describe ('Magnetto Login and shopping',function()
{
    it("Alerts",()=>
    {

    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains('Sign In').click();
    cy.get('#email').type('pakexof341@abevw.com');
    cy.get('#pass').type('Heera!!33');
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    cy.get('.showcart').click();
    cy.get('.product-item-details > .actions > .secondary > .action').click();
    cy.on("window:confirm", (t) =>
     {
        //verify text on pop-up
        expect(t).to.equal("Are you sure you would like to remove this item from the shopping cart?");

    })
    })
    
})