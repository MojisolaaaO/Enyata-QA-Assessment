import { LoginPage } from "../fixtures/loginPage"
describe("Login", () => {
  beforeEach(() => {  
    cy.visit("/"); 
  });

  it("login with valid credentials", () => {
    const login = new LoginPage();
    login.login('standard_user', 'secret_sauce');
  });

  it("login with invalid credentials", () => {
    const login = new LoginPage();
    login.login('standarduser', 'secretsauce');
    login.checkLoginFailure(); // Check for the error message when login fails
  });

  it("login with valid username and invalid password", () => {
    const login = new LoginPage();
    login.login('standard_user', 'sauce');
    login.checkLoginFailure(); // Check for the error message when login fails
  });

  
  it("login with invalid username and valid password", () => {
    const login = new LoginPage();
    login.login('standard', 'secret_user');
    login.checkLoginFailure(); 
  });
  
  it("login with only username", () => {
    const login = new LoginPage();
    login.login('standard_user', '');
    login.checkForNoPassword(); 
  });

  it("login with only password", () => {
    const login = new LoginPage();
    login.login('', 'secret_sauce');
    login.checkForNoUsername(); 
  });

  it("login without providing credentials", () => {
    const login = new LoginPage();
    login.login('', '');
    login.checkForNoUsername();
  });

});
