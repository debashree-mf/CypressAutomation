import LoginPage from "../../Pages/LoginPage";
import SearchProductPage from "../../Pages/SearchProductPage";
import CartPage from "../../Pages/CartPage";

describe("Amazon Cart", () => {

    const login =new LoginPage();
    const search = new SearchProductPage();
    const cart = new CartPage();

    beforeEach(() => {
        login.navigateToUrl();

         cy.fixture('loginData').then((data)=>{
            login.login(data.EMAIL,data.PASSWORD);
            
         })
    });

    it("Add product to cart", () => {

        
        search.searchProduct("Apple iPhone 16");
        cart.openFirstProduct();
        cart.addProductToCart();
        cart.verifyProductAdded();

    });

    it("Update quantity", () => {

        cart.openCart();
        cart.updateQuantity(2);

    });


    it("Remove product from cart", () => {

        cart.openCart();
        cart.removeProduct();
        cart.verifyProductRemoved();

    });

    
});