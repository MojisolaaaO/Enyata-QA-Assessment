import { LoginPage } from "../fixtures/loginPage"
import { CartPage } from "../fixtures/cartPage";
describe("Login", () => {
  beforeEach(() => {  
    cy.visit("/"); 
  });

  it("add a product to cart and checkout", () => {
    const login = new LoginPage();
    const cart = new CartPage();
    login.login('standard_user', 'secret_sauce');
    cart.checkout();
    cart.checkOrderConfirmation();
  });

})