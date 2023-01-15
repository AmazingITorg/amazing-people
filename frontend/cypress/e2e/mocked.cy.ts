/// <reference types="cypress"/>

describe('Amazing Peope Home Mocked', () => {
  it('Visits the home page of amazing people', () => {
    cy.visit('/');
    cy.contains('Amazing People');
    cy.intercept('POST', 'http://localhost:3001', []);
    cy.get('input').type('Tsvetan Tsvetkov');

    cy.wait(500);
    cy.get('.button').click({ force: true });

    cy.intercept('GET', 'http://localhost:3001', [
      { id: 1, name: 'Amazing Test Person1', is_amazing: null },
      { id: 2, name: 'Amazing Test Person2', is_amazing: null },
    ]);
    cy.get('.person').should('have.length', 2);
  });
});
