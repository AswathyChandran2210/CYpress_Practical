/// <reference types ="cypress"/>
describe ('Magnetto Login and shopping',function()
{
    it('WriteUserInfo',function()
    {
        //writing the login information
        cy.writeFile('C:\\CY_Project\\cypress\\fixtures\\MagnetoUser.json',
        {

        UserName:'pakexof341@abevw.com',
        Password:'Heera!!33',
        
        })
    });

    it('Login',function()
    {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.wait(500);
        cy.wait(300);
        //visiting the website
        //cy.visit('https://magento.softwaretestingboard.com/');
        //Reading 5000the information from the UserDetails.json and assign
        //Logging in
        //cy.get('[href="/actions/Account.action;jsessionid=D656719C60CDC4F5B41C1E81E004C033?signonForm="]').click()
        cy.contains('Sign In').click();
        //Loading the file and reading information
        cy.fixture('MagnetoUser').then((LoginInfo)=>
        {
            
           //waiting the element to get visisble
            //cy.wait(1000);
            //Assigning the username to the input fields
            cy.wait(500);
            cy.get('#email').clear();
            cy.get('#email').type(LoginInfo.UserName);
            //Assigining password 
            cy.wait(500);
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').clear();
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(LoginInfo.Password);
            //Signing in
            cy.wait(500);
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
            cy.wait(500);
            //cy.contains('Sign Out').click();
            cy.get('#ui-id-8 > span').click();
            cy.wait(300);
        })
        it('Saless',function()
    {
           
        //cy.visit('https://magento.softwaretestingboard.com/sale.html');
        cy.wait(500);
        cy.get('.categories-menu > :nth-child(1) > span').click();
        cy.wait(100);
        cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click();

        it('AddtoCart',function()
    {
            cy.wait(300);
            //cy.visit(LoginInfo.urlA);
            cy.wait(500);
            cy.get('#search').clear();
            cy.get('#search').type('Ingrid{Enter}');
            cy.scrollTo('center');
            cy.wait(300);
            cy.get('.product-image-photo').click();

    });

    });
    
    });
    
    
});







