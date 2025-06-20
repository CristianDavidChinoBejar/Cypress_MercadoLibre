import initialPage from '../pages/initialPage';

const pageInicial = new initialPage();

describe('Tests E2E en la pagina inicial de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Verificar que la URL sea la correcta', () => {
        cy.url().should('include', 'mercadolibre.com.ar');
    });

    it('Validar que el input de busqueda este habilitado', () => {
        pageInicial.validateEnableInputSearch();
    });

    it('Validar que el input de busqueda contenga el placeholder correcto', () => {
        pageInicial.inputSearch().should('have.attr', 'placeholder', 'Buscar productos, marcas y más…');
    });

    it('Validar que el input de busqueda contenga el atributo autocomplete', () => {
        pageInicial.inputSearch().should('have.attr', 'autocomplete', 'off');
    });
});