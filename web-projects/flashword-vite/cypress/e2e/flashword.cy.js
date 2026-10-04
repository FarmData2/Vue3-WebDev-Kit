describe('FlashWord Tests', () => {
  const completeGame = () => {
    cy.get('[data-cy="hola-card"]')
      .find('[data-cy="translation"]')
      .type('hello{enter}');
    cy.get('[data-cy="uno-card"]')
      .find('[data-cy="translation"]')
      .type('one{enter}');
    cy.get('[data-cy="gris-card"]')
      .find('[data-cy="translation"]')
      .type('grey{enter}');
  };

  it('Check initial page state', () => {
    cy.visit('http://localhost:5173/');

    // Get the app-header element and check its contents.
    cy.get('[data-cy="app-header"]').should('contain', 'FlashWord');

    // Get the correct-count element and check its contents.
    cy.get('[data-cy="num-correct"]').should('have.text', '0');
    cy.get('[data-cy="total-words"]').should('have.text', '3');

    cy.get('[data-cy="completed"]').should('not.exist');
  });

  it('Displays an error and hides the game when fetching words fails', () => {
    cy.intercept('GET', '/api/words', {
      statusCode: 500,
      body: 'Internal Server Error',
    }).as('getWords');

    cy.visit('http://localhost:5173/');
    cy.wait('@getWords');

    cy.get('[data-cy="api-error-message"]')
      .should('be.visible')
      .and('contain.text', 'Something went wrong. Please try again later.');
    cy.get('[data-cy="game-content"]').should('not.exist');
  });

  it('Displays an error and hides the game when a network error occurs while fetching words', () => {
    cy.intercept('GET', '/api/words', {
      forceNetworkError: true,
    }).as('getWords');

    cy.visit('http://localhost:5173/');
    cy.wait('@getWords');

    cy.get('[data-cy="api-error-message"]')
      .should('be.visible')
      .and('contain.text', 'Something went wrong. Please try again later.');
    cy.get('[data-cy="game-content"]').should('not.exist');
  });

  it('Displays an error and hides the game when parsing words fails', () => {
    cy.intercept('GET', '/api/words', {
      statusCode: 200,
      body: '{ invalid json',
    }).as('getWords');

    cy.visit('http://localhost:5173/');
    cy.wait('@getWords');

    cy.get('[data-cy="api-error-message"]')
      .should('be.visible')
      .and('contain.text', 'Something went wrong. Please try again later.');
    cy.get('[data-cy="game-content"]').should('not.exist');
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
      .find('[data-cy="correct-answer"]')
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

  it('Displays the ten fastest leaderboard scores', () => {
    const scores = Array.from({ length: 11 }, (_, index) => ({
      id: index + 1,
      name: `Player ${index + 1}`,
      time: 11 - index,
    }));
    cy.intercept('GET', '/api/times', { body: scores }).as('getTimes');

    cy.visit('http://localhost:5173/');
    cy.wait('@getTimes');

    cy.get('[data-cy="leaderboard-row"]').should('have.length', 10);
    cy.get('[data-cy="leaderboard-row"]')
      .first()
      .should('contain.text', 'Player 11')
      .and('contain.text', '1 seconds');
  });

  it('Submits one completed-game score and refreshes the leaderboard', () => {
    let timesRequestCount = 0;
    cy.intercept('GET', '/api/times', (request) => {
      timesRequestCount++;
      request.reply({
        body: timesRequestCount === 1 ? [] : [{ id: 1, name: 'Ada', time: 0 }],
      });
    }).as('getTimes');
    cy.intercept('POST', '/api/times', (request) => {
      expect(request.body).to.have.property('name', 'Ada');
      expect(request.body.time).to.be.a('number');
      request.reply({ statusCode: 201, body: request.body });
    }).as('submitScore');

    cy.visit('http://localhost:5173/');
    cy.wait('@getTimes');
    completeGame();

    cy.get('[data-cy="elapsed-time"]')
      .invoke('text')
      .should('match', /Your time: \d+ seconds/);
    cy.get('[data-cy="player-name"]').type('  Ada  ');
    cy.get('[data-cy="submit-score"]').click();
    cy.wait('@submitScore');
    cy.get('[data-cy="score-submitted"]').should('be.visible');
    cy.get('[data-cy="submit-score"]').should('not.exist');
    cy.get('[data-cy="leaderboard-row"]').should('contain.text', 'Ada');
  });

  it('Keeps the game available when leaderboard loading fails', () => {
    cy.intercept('GET', '/api/times', {
      statusCode: 500,
      body: 'Internal Server Error',
    }).as('getTimes');

    cy.visit('http://localhost:5173/');
    cy.wait('@getTimes');

    cy.get('[data-cy="game-content"]').should('be.visible');
    cy.get('[data-cy="leaderboard-error"]')
      .should('be.visible')
      .and('contain.text', 'Leaderboard is unavailable right now.');
  });
});
