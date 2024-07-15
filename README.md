Test Automation Assignment 

Environment Setup:

   1. Install the  NodejS
   2. Install the Visual Studio Code (VSCode)
   3. Create a new folder for project & open in VSCode
   4. open cmd then execute the command for create the package.json file
             <!-- npm -i init -->
   5. Install the cypress
              <!-- npm install cypress --save -dev -->
   6. Start the cypress 
              <!-- npx cypress open -->
              


Automate the Signup and login functionality 

URL: [https://dev-fe.buttonshift.com]

1.Write the test cases and execute the test cases.
2.Create the SignupPage.cy.js and LoginPage.cy.js file under e2e folder. 
<!-- In Signup the new user-->
First check wheather the valid username,password,otp,location and PhoneNumber. After signup successfully going on the community page.
<!-- In Login the user -->
First check wheather the valid username and password. After Login successfully going on the community page.
Successfully logout the user.
<!-- In Login the Invalid user  -->


Reporting:

1. install cypress-mochawesome-reporter
<!-- npm i --save-dev cypress-mochawesome-reporter -->
2. Change cypress reporter & setup hooks

Edit config file (cypress.config.js by default)

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

3. Add to cypress/support/e2e.js

import 'cypress-mochawesome-reporter/register';

4. run cypress
<!-- npx cypress run  -->

After copy the index.html path and enter the browser, It should showing the test report.

   
