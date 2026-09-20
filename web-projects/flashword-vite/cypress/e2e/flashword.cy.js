describe('FlashWord Tests', () => {
  it('Check initial page state', () => {
    cy.visit('http://localhost:5173/');

    // Get the <h1> element and check its contents.
    cy.get('h1').should('contain', 'FlashWord');
  });
});
