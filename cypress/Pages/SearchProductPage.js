class SearchProductPage {

    searchBox = "#twotabsearchtextbox";
    searchButton = "#nav-search-submit-button";
    searchResults = '[data-component-type="s-search-result"]';
    txtBrandName="div[data-component-type='s-search-result'] span[class='a-size-medium a-color-base']";
    txtBrandName1="div[data-component-type='s-search-result'] h2";
    txtStarRating="div[data-component-type='s-search-result'] span[class='a-size-small a-color-base']";
    filterBrandName="a[aria-label='Apply the filter Lenovo to narrow results'] i[class='a-icon a-icon-checkbox']"
    filterStarRating="a[aria-label='Apply the filter 4 Stars & Up to narrow results']";
    expandfilter='.a-dropdown-container';
    filterSort="#a-popover-2 li";


    searchProduct(product) {
        cy.get(this.searchBox).clear().type(product);
        cy.get(this.searchButton).click();
    }

    verifySearchResults(keyword) {
        cy.get(this.searchResults)
            .should("have.length.greaterThan", 0);

        cy.get(this.txtBrandName1)
            .each(($el) => {
                expect($el.text().toLowerCase())
                    .to.contain(keyword.toLowerCase());
            });
    }

    filterByBrand(brandName){

        cy.get(this.filterBrandName).click(); 
        
        let product_header=cy.get(this.txtBrandName1);
        console.log('product_header :'+product_header);

        product_header.contains(brandName).should('exist');
            
       

    }

    sortBy(optionText) {
        cy.get(this.expandfilter).click();
        // cy.get(this.filterSort).select(optionText);

        cy.get(this.filterSort).each(($el) => {

            if ($el.text().trim() === "optionText") {

                cy.wrap($el).click();

            }

        });
    }

    verifySortedResults() {
        cy.get(this.searchResults)
            .should("be.visible");
    }

    filterByStarRating(){
        cy.scrollTo(0,500);
        cy.get(this.filterStarRating).click();
        cy.get(this.txtStarRating).should("exist");

    }
}
export default SearchProductPage;