describe('Log in', () => {
  
    const baseUrl = 'https://dev-fe.buttonshift.com/'; 
    
  
  
    const user = {
      username: 'testuser',
      email: 'a.gfdhp@gmail.com',
      password: '12345678'
    };

    it('should login a user', () => {
        cy.visit(baseUrl);
        
        cy.contains('button', 'Log in', { timeout: 10000 }).click();
    
        //Enter a email address
        cy.get('[data-cy="auth-email-input"]', { timeout: 10000 }).should('be.visible').type(user.email);
        cy.get('button.MuiIconButton-root').eq(5).click({ force: true });
    
        //Enter a Password
        cy.get('input[placeholder="Enter password"]').type(user.password);
        cy.get('button.MuiButton-root').eq(16).click({ force: true });

        //After login Successfully going the community page

    })

})