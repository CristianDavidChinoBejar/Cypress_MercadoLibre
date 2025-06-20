import './commands'

declare global {
    namespace Cypress {
        interface Chainable {
            searchProduct(product: string): Chainable<Element>;
        }
    }
}