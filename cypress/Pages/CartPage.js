class CartPage {

    searchBox = "#twotabsearchtextbox";
    searchButton = "#nav-search-submit-button";
    firstProduct = '[data-component-type="s-search-result"] a';
    addToCartBtn = "div#newAccordionRow_0 input#add-to-cart-button";
    addedToCartMsg = " Added to cart ";
    addedToCart="div[class='a-section attach-base-atc-success'] span[class='a-size-medium a-text-bold']";

    cartIcon = "#nav-cart";
    cartCount = "#nav-cart-count";

    cartItems = ".sc-list-item";
    deleteBtn = "Delete";
    quantityIncreaseButton = "button[data-a-selector='increment']";
    itemQuantity ="span[data-a-selector='value']";

    subtotalText = "Subtotal";
    continueShoppingBtn = "Continue shopping";
    emptyCartMsg = "Your Amazon Cart is empty";



    openFirstProduct() {
        cy.get(this.firstProduct)
            .first()
            .invoke("removeAttr", "target")
            .click();
    }

    addProductToCart() {
        cy.scrollTo(0,400);
        cy.get(this.addToCartBtn).click();
    }

    verifyProductAdded() {
        cy.get(this.addedToCart,{timeout:8000}).should("have.text",this.addedToCartMsg);
    }

    openCart() {
        cy.get(this.cartIcon).click();
    }

    verifyCartNotEmpty() {
        cy.get(this.cartItems)
            .should("have.length.greaterThan", 0);
    }

    verifyCartCount() {
        cy.get(this.cartCount)
            .invoke("text")
            .then((count) => {
                expect(Number(count)).to.be.greaterThan(0);
            });
    }

    updateQuantity(quantity) {
        cy.get(this.quantityIncreaseButton).click();
        cy.wait(8000);
        cy.get(this.itemQuantity,).invoke("text")
            .then((count) => {
                expect(Number(count)).to.be.equal(quantity);
            });
    }

    removeProduct() {
        cy.contains(this.deleteBtn).click();
    }

    verifyProductRemoved() {
        cy.contains("was removed from Shopping Cart")
            .should("be.visible");
    }

    verifySubtotal() {
        cy.contains(this.subtotalText)
            .should("be.visible");
    }

    continueShopping() {
        cy.contains(this.continueShoppingBtn).click();
    }

    verifyHomePage() {
        cy.url().should("include", "amazon.in");
    }

    verifyEmptyCart() {
        cy.contains(this.emptyCartMsg)
            .should("be.visible");
    }

}
export default CartPage;