/// <reference types="cypress"/>

describe('Amazing Peope Home Unmocked', () => {
  it('Visits the home page of amazing people', () => {
    cy.visit('/');
    cy.contains('Amazing People');
    cy.get('input').type('Tsvetan Tsvetkov');
    cy.wait(500);
    cy.get('.button').click({ force: true });
    cy.wait(500);
    cy.get('.person').should('have.length', 1);
  });
});
