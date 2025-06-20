import homePage from '../../pages/homePage';

const home = new homePage();

Cypress.Commands.add('searchProduct', (product: string) => {
    home.inputSearch().type(product);
    cy.wait(10000);
});