describe('FlashWord Tests', () => {
  it('Check initial page state', () => {
    cy.visit('http://localhost:5173/');

    // Get the app-header element and check its contents.
    cy.get('[data-cy="app-header"]').should('contain', 'FlashWord');

    // Get the correct-count element and check its contents.
    cy.get('[data-cy="num-correct"]').should('have.text', '0');
    cy.get('[data-cy="total-words"]').should('have.text', '3');

    cy.get('[data-cy="completed"]').should('not.exist');
  });

  it('Check word cards', () => {
    cy.visit('http://localhost:5173/');

    // Check that each of the word card's is displayed.
    cy.get('[data-cy="hola-card"]').should('be.visible');
    // check that hola-card does not have the css class correct.
    cy.get('[data-cy="hola-card"]').should('not.have.class', 'correct');
    // Check that the hola-card is displaying the correct word.
    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="word"]')
      .should('be.visible')
      .should('contain', 'hola');
    // Check that the hola-card input field is empty.
    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .should('be.visible')
      .should('have.value', '');

    cy.get('[data-cy="uno-card"]').should('be.visible');
    cy.get('[data-cy="uno-card"]').should('not.have.class', 'correct');
    cy.get('[data-cy="uno-card"]')
      .find('[data-cy="word"]')
      .should('be.visible')
      .should('contain', 'uno');
    cy.get('[data-cy="uno-card"]')
      .find('[data-cy="translation"]')
      .should('be.visible')
      .should('have.value', '');

    cy.get('[data-cy="gris-card"]').should('be.visible');
    cy.get('[data-cy="gris-card"]').should('not.have.class', 'correct');
    cy.get('[data-cy="gris-card"]')
      .find('[data-cy="word"]')
      .should('be.visible')
      .should('contain', 'gris');
    cy.get('[data-cy="gris-card"]')
      .find('[data-cy="translation"]')
      .should('be.visible')
      .should('have.value', '');
  });

  it('Type in hola-word input', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .type('hello');

    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .should('have.value', 'hello');
  });

  it('Checks correct translation of hola', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .type('hello{enter}');

    cy.get('[data-cy="hola-card"]')
      .should('have.class', 'correct')
      .find('.correctAnswer')
      .should('have.text', 'hello');

    cy.get('[data-cy="num-correct"]').should('have.text', '1');
  });

  it('Completes the game', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .type('hello{enter}');
    cy.get('[data-cy="uno-card"]')
      .find('[data-cy="translation"]')
      .type('one{enter}');
    cy.get('[data-cy="gris-card"]')
      .find('[data-cy="translation"]')
      .type('grey{enter}');

    cy.get('[data-cy="hola-card"]').should('have.class', 'correct');
    cy.get('[data-cy="uno-card"]').should('have.class', 'correct');
    cy.get('[data-cy="gris-card"]').should('have.class', 'correct');

    cy.get('[data-cy="correct-count"]').should('not.exist');
    cy.get('[data-cy="completed"]')
      .should('be.visible')
      .and('contain.text', 'Great work, you have completed all the words!');
  });

  it('Resets the game', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .type('hello{enter}');
    cy.get('[data-cy="num-correct"]').should('have.text', '1');

    cy.get('[data-cy="reset"]').click();

    cy.get('[data-cy="num-correct"]').should('have.text', '0');
    cy.get('[data-cy="completed"]').should('not.exist');
    cy.get('[data-cy="hola-card"]')
      .should('not.have.class', 'correct')
      .find('[data-cy="translation"]')
      .should('have.value', '');
  });
});
