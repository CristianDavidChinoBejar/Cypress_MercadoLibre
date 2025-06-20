import homePage from '../pages/homePage'

const home = new homePage();

describe('Tests E2E en la pagina de productos de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verificar que la busqueda de celular se realice correctamente', () => {
        // home.inputSearch().type('celular');
        cy.searchProduct('celular');
        cy.wait(6000);
        home.firtsOptionSearch().should('be.visible').click()
    });
})