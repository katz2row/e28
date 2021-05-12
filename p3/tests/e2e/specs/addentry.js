// https://docs.cypress.io/api/introduction/api.html

describe('Add Entry', () => {

    const article = {
        title: "Testing Title",
        date: "05-11-2021",
        categories: "School, Vue",
        abstract: "This is a sample abstract. You should replace this with the actual article abstract. This abstract should be a short, non-formatted paragraph, or even just one or two sentences, but it does need to be at least 100 characters.",
        article: "<p>This is a sample article. You should replace this with the actual article.</p><p>This article can have limited and inline HTML. It will be written in a div and should not have any style sheets or JavaScript.</p><p>It needs to be at least 100 characters.</p>"
    }

    it('add a new entry', () => {

        // First we have to login, because only auth’d users can add products
        // Login is a custom command defined in /tests/e2e/support/commands.js
        // Ref: https://docs.cypress.io/api/cypress-api/custom-commands.html
        cy.login();

        cy.visit('/addentry');

        cy.get('[data-test="title-entry"]').clear().type(article.title);
        cy.get('[data-test="date-entry"]').clear().type(article.date);
        cy.get('[data-test="categories-entry"]').clear().type(article.categories);
        cy.get('[data-test="abstract-entry"]').clear().type(article.abstract);
        cy.get('[data-test="article-entry"]').clear().type(article.article);

        cy.get('[data-test="add-button"]').click();

        cy.get('[data-test="confirmation-message"]').should('exist');

        cy.visit('/');
        cy.contains(article.title);
    });

    it('shows error messages when blurring off a field', () => {

        cy.login();

        cy.visit('/addentry');

        cy.get('[data-test="title-entry"]').clear();

        cy.get('[data-test="date-entry"]').click();

        // Assert we see validation feedback
        cy.contains("The title field is required.");
    });

})