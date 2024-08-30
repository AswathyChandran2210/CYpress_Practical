/// <reference types ="cypress"/>
it('Google Search', () => {
    cy.visit('https://bsscommerce.com/blog/luma-theme/')
    cy.get('#search-4 > .pc-searchform > .pc-searchform-inner > .search-input').type("Magneto{Enter}");
    cy.wait(5000);
    cy.get('#menu-item-39434 > a').click()
    cy.wait(2000);
    //Navigating to the cypress site
    //cy.visit('https://example.cypress.io/');
    cy.origin('https://example.com', () => {
      // Commands to run on the external origin
      cy.visit('https://example.cypress.io/');
      cy.wait(5000);
      cy.contains('get').click();
      // Additional commands for the external origin
    });

    //cy.wait(5000);
    //cy.contains('get').click();
    //cy.get('#query-btn', { timeout: 5000 }).should('be.visible');
    cy.get('#query-btn').should('contain','Button');
    
    //cy.get('#APjFqb').type("Selenium Tutorial{Enter}")
    //Should assertion

   
  }
  )