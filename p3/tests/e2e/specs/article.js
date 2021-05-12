describe('Full Article', () => {

    // Test product
    const article1 = {
        title: 'Driscoll’s Strawberries',
        id: 1
    }

    it('shows an article', () => {
        cy.visit('/article/1');
        cy.contains('[data-test="article-h1"]', 'Finding');
        cy.get('[data-test="article-blog"]').should('exist');
        cy.get('[data-test="previous-article"]').should('have.css', 'display', 'none');

    })

    it('shows next', () => {
        cy.visit('/');
        cy.get('[data-test="article-count"]').invoke('text').then((text => {
            cy.visit('/article/' + text)
        }));
        cy.get('[data-test="next-article"]').should('have.css', 'display', 'none');

    })

})