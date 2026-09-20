describe('FlashWord Tests', () => {
  it('Check initial page state', () => {
    cy.visit('http://localhost:5173/');

    // Get the <h1> element and check its contents.
    cy.get('[data-cy="app-header"]').should('contain', 'FlashWord');

    // Get the <p> element and check its contents.
    cy.get('[data-cy="correctCount"]').should(
      'contain',
      'You have answered 0 out of 3'
    );
  });
});
