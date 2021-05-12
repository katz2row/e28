// https://docs.cypress.io/api/introduction/api.html

describe('About', () => {
  it('visits the about me', () => {
    cy.visit('/aboutme')
    cy.contains('[data-test="about-header"]', 'About Me')
    cy.contains('[data-test="about-content"]', 'nerd')
})
  })

