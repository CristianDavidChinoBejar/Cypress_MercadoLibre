import ExamplePage from '../pages/examplePage';

const examplePage = new ExamplePage();

describe('Tests E2E en la pagina inicial de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('Verificar que la URL sea la correcta', () => {
        cy.url().should('include', 'mercadolibre.com.ar');
    });

    it('Validar que el input de busqueda este habilitado', () => {
        examplePage.validateEnableInputSearch();
    });
});