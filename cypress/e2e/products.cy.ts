import homePage from '../pages/homePage'
import productPage from '../pages/productPage'

const home = new homePage();
const product = new productPage();

describe('Tests E2E en la pagina de productos de Mercado Libre Argentina', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Validar que la busqueda de celular se realice correctamente', () => {
        cy.searchProduct('celular');
        home.firtsOptionSearch().should('be.visible').click()
        product.productTitle().should('contain.text', 'Celular');
    });

    it.only('Validar el orden del listado de opciones Marca', () => {
        cy.searchProduct('celular');
        home.firtsOptionSearch().should('be.visible').click();
        product.brandList().should('be.visible')
            .invoke('text').then((texto) => {
                const palabras = texto.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || [];
                const marcas = palabras.filter(palabra => palabra !== 'Mostrar' && palabra !== 'más');
                
                expect(marcas).to.have.length(9);
                
                marcas.forEach((palabra, index) => {
                    switch (index) {
                        case 0:
                            expect(palabra).to.equal('Samsung');
                            cy.log(`Marca ${index+1}: Samsung`);
                            break;
                        case 1:
                            expect(palabra).to.equal('Apple');
                            cy.log(`Marca ${index+1}: Apple')`);
                            break;
                        case 2: 
                            expect(palabra).to.equal('Motorola');
                            cy.log(`Marca ${index+1}: Motorola')`);
                            break;
                        case 3:
                            expect(palabra).to.equal('Xiaomi');
                            cy.log(`Marca ${index+1}: Xiaomi')`);   
                            break;
                        case 4:
                            expect(palabra).to.equal('Infinix');
                            cy.log(`Marca ${index+1}: Infinix')`);
                            break;
                        case 5:
                            expect(palabra).to.equal('Oppo');
                            cy.log(`Marca ${index+1}: Oppo')`);
                            break;
                        case 6:
                            expect(palabra).to.equal('Realme');
                            cy.log(`Marca ${index+1}: Realme')`);
                            break;
                        case 7:
                            expect(palabra).to.equal('TCL');
                            cy.log(`Marca ${index+1}: TCL')`);
                            break;
                        case 8:
                            expect(palabra).to.equal('Tecno');
                            cy.log(`Marca ${index+1}: Tecno')`);
                            break;
                    }
                });
        });
    });
})