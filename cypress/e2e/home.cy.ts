import homePage from '../pages/homePage';

const home = new homePage();

describe('Tests E2E en la pagina inicial de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Verificar que la URL sea la correcta', () => {
        cy.url().should('include', 'mercadolibre.com.ar');
    });

    it('Validar que el input de busqueda este habilitado', () => {
        home.validateEnableInputSearch();
    });

    it('Validar que el input de busqueda contenga el placeholder correcto', () => {
        home.inputSearch().should('have.attr', 'placeholder', 'Buscar productos, marcas y más…');
    });

    it('Validar que los resultados del input search sean 6 elementos', () => {
        home.inputSearch().type('test');
        cy.wait(6000);
        home.firtsOptionSearch().should('be.visible').parent()
            .find('li')
            .should('have.length', 6);
    })
});