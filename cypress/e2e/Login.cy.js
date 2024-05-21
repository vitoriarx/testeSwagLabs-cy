/// <reference types = 'cypress' />

describe('Login', () => {
    it('O site deve ser acessado e fazer o login com sucesso', () => {
        cy.visit('index.html');
        
        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_label').should('be.visible')
    });

    it('Login não será realizado caso username ou password esteja incorreto', () => {
        cy.visit('index.html');

        cy.get('#user-name').type('problem_user');
        cy.get('#password').type('secret_s');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
    
});


