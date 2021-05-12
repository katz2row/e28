// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('[data-test="abstract-title"]', 'Finding')
    cy.contains('[data-test="read-more"]', 'Read More')
    cy.get('[data-test="abstract-list"]').its('length').should('be.gte', 3)
})
  })

