export class CartPage {
  // Locators
  addToCartBtn = "#add-to-cart-sauce-labs-backpack"
  cartIcon = "[data-test='shopping-cart-link']";
  checkoutBtn = "#checkout";
  firstNameField = "#first-name"
  lastNameField = "#last-name"
  postalCodeField = "#postal-code"
  continueBtn = "#continue"
  finishBtn = "#finish"
  orderConfirmation = "[data-test='complete-header']"
 
  // Method to add to cart and checkout 
checkout(){
  cy.get(this.addToCartBtn).click()
  cy.get(this.cartIcon).click()
  cy.get(this.checkoutBtn).click()
  cy.get(this.firstNameField).type("Test")
  cy.get(this.lastNameField).type("User")
  cy.get(this.postalCodeField).type("101")
  cy.get(this.continueBtn).click()
  cy.get(this.finishBtn).click()
}

  

  checkOrderConfirmation(){
      cy.get(this.orderConfirmation).should("be.visible").and("contain.text", "Thank you for your order!"); 
  }

 
}