/// <reference types='cypress' /> 

describe('Adicionando produto ao carrinho', () => {
    it('Adicionar produto ao carrinho', () => {
        cy.visit('inventory.html')
        cy.get('#item_0_img_link > .inventory_item_img').click()
        cy.get('.btn_primary').click()
        cy.get('.fa-layers-counter').contains('1')
        cy.get('#shopping_cart_container').click()
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Ana')
        cy.get('[data-test="lastName"]').type('Silva')
        cy.get('[data-test="postalCode"]').type('85444-000')
        cy.get('.btn_primary').click()
        cy.get('.btn_action').click()
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
    });

    


});