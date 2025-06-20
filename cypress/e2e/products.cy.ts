import homePage from '../pages/homePage'
import productPage from '../pages/productPage'

const home = new homePage();
const product = new productPage();

describe('Tests E2E en la pagina de productos de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verificar que la busqueda de celular se realice correctamente', () => {
        cy.searchProduct('celular');
        home.firtsOptionSearch().should('be.visible').click()
        product.productTitle().should('contain.text', 'Celular');
    });
})