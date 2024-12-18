/// <reference types="cypress" />
describe ('Magnetto Login and shopping',function()
{
    beforeEach(function()
    {
        cy.writeFile('C:\\MYPROJECT\\cypress\\fixtures\\example.json',
            {

            email:'pakexof341@abevw.com',
            password:'Heera!!33',

        
            })
        
        cy.visit('https://magento.softwaretestingboard.com/');
        //cy.viewport('samsung-s10');
        cy.title().should("contain","Home Page");
        cy.contains('Sign In').click();
        cy.wait(100);
        cy.get('#email').clear();
        cy.fixture('example.json').then((studentdetils)=>
        {
                //expect(studentdetils.email).eq('pakexof341@abevw.com');
                //expect(studentdetils.class).eq(5);
                //expect(studentdetils.mark).eq(90);
                cy.get('#email').type(studentdetils.email);
                cy.get('#pass').type(studentdetils.password);
        })
        cy.wait(100);
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
        cy.wait(100);

    })
    it('Salesss',()=>
    {
        cy.wait(500);
        cy.get('#ui-id-8 > span').click();
        cy.wait(100);
        cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();
        cy.wait(100);
        cy.get('#search').clear();
        cy.get('#search').type('Jade{Enter}');
        cy.scrollTo(100,200);
        cy.wait(100);
        //Clicking on the searched product
        cy.get('.product-image-photo').click();
        cy.wait(100);
        //selecting the size
        cy.get('#option-label-size-143-item-166').click();
        cy.wait(100);
        cy.get('#option-label-color-93-item-52').click();
        cy.wait(100);
        cy.get('#qty').clear();
        cy.get('#qty').type('2');
        cy.wait(100);
        cy.get('#product-addtocart-button').click();
        cy.wait(100);
    })
    it('Showcart',()=>
    {
        cy.wait(100);
        //clicking on the cart to view the items added
        cy.get('.showcart').click();
    })

    it('Emptycart',()=>
    {

        cy.wait(100);
        //deleting the items from the cart
        cy.get('.showcart').click();
        cy.wait(500);
        cy.get('.product-item-details > .actions > .secondary > .action').should('exist').and('be.visible');
        cy.get('.product-item-details > .actions > .secondary > .action').click();
        cy.get('.action-primary action-accept').should('exist').and('be.visible');
        cy.get('.action-primary action-accept').contains('OK').click();
        
    })
    afterEach(function()
    {
        cy.wait(700);
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click();
        cy.wait(300);
        cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click();
        //cy.contains('Sign Out').click();
        cy.reload();
    })
    
})