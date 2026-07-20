import LoginPage from "../../Pages/LoginPage";
import SearchProductPage from "../../Pages/SearchProductPage";

describe("Amazon Search", () => {
    const login =new LoginPage();
    const search = new SearchProductPage();

    beforeEach(()=>{
        login.navigateToUrl();
    }); 

    it("Search product and verify results", () => {


        search.searchProduct("fan");

        search.verifySearchResults("fan");

    });

    it("Search with gibberish text", () => {

        search.searchProduct("fgdjyuyghf");

        cy.contains("No results")
            .should("exist");

    });

});


describe("Amazon Filters", () => {

    const login =new LoginPage();
    const search = new SearchProductPage();

    beforeEach(() => {

       login.navigateToUrl();
       search.searchProduct('Laptop');

    });

    it("Apply Brand Filter", () => {

        search.filterByBrand('Lenovo');

    });


    it("Apply Rating Filter", () => {

        search.filterByStarRating();

      

    });

    it("Sort Price Low to High", () => {

        search.sortBy("Price: Low to High");
        search.verifySortedResults();

        
    });

});