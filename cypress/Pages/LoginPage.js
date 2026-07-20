class LoginPage {

    txtUserEmail='#ap_email_login';
    txtUserPassword='#ap_password';
    btnContinue='.a-button-input';
    btnSignin='#signInSubmit';
    alrtMsgInvalid='.a-alert-content';
    linkForgotPassword='#auth-fpp-link-bottom';
    txtEnterVerCode='.a-size-base-plus.transaction-approval-word-break.a-text-bold';
    btnSubmitCode="//input[@aria-labelledby='cvf-submit-otp-button-announce']";
    

    navigateToUrl() {
        cy.visit("/");
    }

    clickSignIn() {
        cy.contains('Hello, sign in').click();
    }

    enterEmail(email) {
        cy.get(this.txtUserEmail).clear().type(email);
    }

    clickContinue() {
        cy.get(this.btnContinue).click();
    }

    enterPassword(password) {
        cy.get(this.txtUserPassword).clear().type(password, {
            log: false
        });
    }

    clickLogin() {
        cy.get(this.btnSignin).click();
    }

    clickForgotPassword() {
        cy.get(this.linkForgotPassword).click();
    }



    verifyLogin() {
        cy.url().should('include', '/');
        cy.contains('Hello').should('be.visible');
    }

    verifyInvalidLogin() {
       cy.get(this.alrtMsgInvalid)
      .should('contain', 'Your password is incorrect');
    }

    verifySubmitCodePage(){
        cy.get(this.txtEnterVerCode).should('contain','Enter verification code');
        cy.xpath(this.btnSubmitCode).should('be.visible')
    }


    login(email, password) {
        this.clickSignIn();
        this.enterEmail(email);
        this.clickContinue();
        this.enterPassword(password);
        this.clickLogin();
    }
    invalidLogin(email,password){
        this.clickSignIn();
        this.enterEmail(email);
        this.clickContinue();
        this.enterPassword(password);
        this.clickLogin();
        
    }

    forgotPassword(email){
        this.clickSignIn();
        this.enterEmail(email);
        this.clickContinue();
        this.clickForgotPassword();
        //this.enterEmail(email);
        this.clickContinue();        
    }


}

export default LoginPage;