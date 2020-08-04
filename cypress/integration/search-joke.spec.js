/// <reference types="cypress" />

const ENV = Cypress.env('env')
const BASE_URL = Cypress.env(ENV).url

describe('Search joke', function () {
  it('Should show and hide the search section', function () {
    cy.visit(BASE_URL)

    cy.get('.cy-toggle-search').click()
    cy.url().should('include', '/search')
    cy.get('.cy-search-section').should('be.visible')

    cy.get('.cy-toggle-search').click()
    cy.url().should('not.include', '/search')
    cy.get('.cy-search-section').should('not.be.visible')
  })

  it('Should show initial jokes while no joke searched', function () {
    cy.visit(`${BASE_URL}/search`)

    cy.get('.cy-search-result-item').should('be.visible')
    cy.get('.cy-search-no-result-item').should('not.be.visible')
  })

  it('Should search and find a joke', function () {
    cy.visit(`${BASE_URL}/search`)

    cy.get('input').type('lion').should('have.value', 'lion')
    cy.get('form').submit()

    cy.get('.cy-search-result-item').contains('lion')
  })

  it('Should give a feedback message if no joke found', function () {
    const meaninglessText = 'hauisdhasdjahrufew'

    cy.visit(`${BASE_URL}/search`)

    cy.get('input').type(meaninglessText)
    cy.get('form').submit()

    cy.get('.cy-search-no-result-item').should('be.visible')
    cy.get('.cy-search-result-item').should('not.be.visible')
  })
})
