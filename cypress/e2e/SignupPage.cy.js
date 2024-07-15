function generateUniqueEmail() {
  const timestamp = Date.now();
  return `testuser_${timestamp}@example.com`;
}

describe('Sign up', () => {
  
  const baseUrl = 'https://dev-fe.buttonshift.com/'; 
  
  const uniqueEmail = generateUniqueEmail();

  const user = {
    username: 'testuser',
    // email: 'acggfsdfdf@trshggfg.in',
    password: 'TestPassword123!',
    location: 'India',
    phoneNumber: '1234567890',
    otpValues:  ['1', '2', '3', '4', '5', '6']
  };

  
  it('should sign up a new user', () => {
    cy.visit(baseUrl);
    
    // Click the Sign up Page
    cy.contains('button', 'Sign up', { timeout: 10000 }).click();

    //Enter a email address
    cy.get('[data-cy="auth-email-input"]', { timeout: 10000 }).should('be.visible').type(uniqueEmail);
    cy.get('button.MuiIconButton-root').eq(5).click({ force: true });

    //Enter a Password
    cy.get('input[placeholder="Enter password"]').type(user.password);
    cy.get('input[placeholder="Retype password"]').type(user.password);
    cy.get('button.MuiIconButton-root').eq(6).click({ force: true });
    

    //Enter a otp
    cy.get('input[aria-label="Please enter OTP character 1"]').type('1');
    cy.get('input[aria-label="Please enter OTP character 2"]').type('2');
    cy.get('input[aria-label="Please enter OTP character 3"]').type('3');
    cy.get('input[aria-label="Please enter OTP character 4"]').type('4');
    cy.get('input[aria-label="Please enter OTP character 5"]').type('5');
    cy.get('input[aria-label="Please enter OTP character 6"]').type('6');
    cy.get('button.MuiIconButton-root').eq(6).click({ force: true });


    //Enter a location and Phone number and Successfully Sign up
    cy.get('[data-cy="signup-username-input"]').type(user.username);

    cy.get('[data-cy="signup-country-select-input"] input', { timeout: 10000 }).should('not.be.disabled').and('be.visible') .type(user.location);
    cy.wait(1000); 
    cy.get('.MuiAutocomplete-option').should('be.visible').eq(1).click();

    cy.get('[data-cy="signup-phone-input"]').type(user.phoneNumber);
    cy.get('[data-cy="signup-phone-verify-button"]').click();
    cy.get('input[aria-label="Please enter OTP character 1"]').type('1');
    cy.get('input[aria-label="Please enter OTP character 2"]').type('2');
    cy.get('input[aria-label="Please enter OTP character 3"]').type('3');
    cy.get('input[aria-label="Please enter OTP character 4"]').type('4');
    cy.get('input[aria-label="Please enter OTP character 5"]').type('5');
    cy.get('input[aria-label="Please enter OTP character 6"]').type('6');
    

   

    cy.get('[data-cy="signup-submit-button"]').click();
    // Successfully signup the user


  
  })


  })