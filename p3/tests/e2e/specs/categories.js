describe('Categories', () => {
    it('shows the categories', () => {

        cy.visit('/categories');
        cy.contains('[data-test="categories-list"]', 'Community');
        cy.get('[data-test="categories-list"]').its('length').should('be.gte', 5);
    })
})