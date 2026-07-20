// cypress/e2e/login.cy.js

import LoginPage from '../../Pages/LoginPage';


describe('Amazon Login', () => {
const login =new LoginPage();

  
beforeEach(()=>{
   login.navigateToUrl();
}); 

  it('Login with valid credentials', () => {

         cy.fixture('loginData').then((data)=>{
            login.login(data.EMAIL,data.PASSWORD);
            
         })
         
         login.verifyLogin();

      });

   it('Wrong password', () => {


         cy.fixture('loginData').then((data)=>{
            login.invalidLogin(data.EMAIL,data.INVALID_PASSWORD);
            
         })
       login.verifyInvalidLogin();

  });

  it('Forgot Password',()=>{

         cy.fixture('loginData').then((data)=>{
            login.forgotPassword(data.EMAIL);
            
         })
      login.verifySubmitCodePage();


  });

});

