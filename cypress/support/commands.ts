// This file is used to define custom Cypress commands. 
// You can add your custom commands here and export them for use in your tests. 

Cypress.Commands.add("login", (email, password) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

// Add more custom commands as needed.