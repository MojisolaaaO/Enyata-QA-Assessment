export class LoginPage {
  // Locators
  usernameField = "[data-test='username']"
  passwordField = "#password";
  loginButton = "#login-button";
  errorMessage = ".error-message-container"
 
  // Method to perform login
  login(username, password) {
      if (username !== '') { // Only type the username if it's not empty
          cy.get(this.usernameField).type(username);
      }
      if (password !== '') {  // Only type the password if it's not empty
          cy.get(this.passwordField).type(password);
      }
      cy.get(this.loginButton).click();  
  }
  

  // Method to check if login failed and error message is displayed
  checkLoginFailure() {
      cy.get(this.errorMessage).should("be.visible").and("contain.text", "Epic sadface: Username and password do not match any user in this service"); 
}

checkForNoUsername(){
  cy.get(this.errorMessage).should("be.visible").and("contain.text", "Epic sadface: Username is required"); 
}

  checkForNoPassword(){
      cy.get(this.errorMessage).should("be.visible").and("contain.text", "Epic sadface: Password is required"); 
  }

 
}