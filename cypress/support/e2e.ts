// This file is used to set up global configurations and behaviors for Cypress end-to-end tests. 
// You can include hooks and other configurations that apply to all tests. 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevent Cypress from failing the test on uncaught exceptions
});

// Additional global configurations can be added here.