// https://docs.cypress.io/api/introduction/api.html

describe('Account', () => {

    const user = {
        name: 'Jill Harvard',
        email: 'jill@harvard.edu',
        password: 'asdfasdf'
    }

    it('lets a user log in and log out', () => {
        cy.visit('/account');
        cy.get('[data-test="loginselect-button"]').click();
        cy.get('[data-test="email-input"]').clear().type(user.email);
        cy.get('[data-test="password-input"]').clear().type(user.password);
        cy.get('[data-test="login-button"]').click();
        cy.contains('[data-test="loggedin-name"]', user.name);
        cy.contains('[data-test="loggedin-email"]', user.email);

        cy.get('[data-test=logout-button]').click();

        // We know logout works if we see the login button again
        cy.get('[data-test="loginselect-button"]').should('exist');
        cy.get('[data-test="registerselect-button"]').should('exist');
    })

    it('shows an error if login is invalid', () => {
        cy.visit('/account');
        cy.get('[data-test="loginselect-button"]').click();
        cy.get('[data-test="email-input"]').clear().type(user.email);
        cy.get('[data-test="password-input"]').clear().type('this-password-should-not-work');
        cy.get('[data-test="login-button"]').click();
        cy.contains('These credentials do not match our records.');
    })

    it('lets a user register then log in and log out', () => {
        cy.visit('/account');
        cy.get('[data-test="registerselect-button"]').click();
        cy.get('[data-test="name-input"]').clear().type(user.name + (Math.floor(Math.random() * 2000)));
        cy.get('[data-test="email-input"]').clear().type(user.email + (Math.floor(Math.random() * 2000)));
        cy.get('[data-test="password-input"]').clear().type(user.password + (Math.floor(Math.random() * 2000)));
        cy.get('[data-test="register-button"]').click();
        cy.contains('[data-test="loggedin-name"]', user.name);

        cy.get('[data-test=logout-button]').click();

        // We know logout works if we see the login button again
        cy.get('[data-test="loginselect-button"]').should('exist');
        cy.get('[data-test="registerselect-button"]').should('exist');
    })


})