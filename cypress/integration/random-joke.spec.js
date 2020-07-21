/// <reference types="cypress" />

const ENV = Cypress.env('env')
const BASE_URL = Cypress.env(ENV).url

describe('Random Joke Page', function () {
  it('Should load a joke on first visit', function () {
    cy.visit(BASE_URL)
    cy.get('.cy-joke').not('empty')
  })

  it('Should refresh the joke on click', function () {
    cy.visit(BASE_URL)
    cy.get('.cy-refresh-joke').click()
    cy.get('.cy-joke').not('empty')
  })
})
