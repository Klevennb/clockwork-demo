describe('ActivityAdder Component', () => {
  it('should render the input, label, and button correctly', () => {
    cy.visit('/'); // Visit the page where the component is mounted
    cy.get('label').contains('Activity to Add'); // Check if the label is rendered
    cy.get('input').should('be.visible'); // Ensure the input field is visible
    cy.get('button').contains('Add Activity').should('be.disabled'); // Check if the button is rendered and disabled initially
  });

  it('should clear the input field after clicking Add Activity', () => {
    cy.get('input').type('Biking');
    cy.get('button').click();
    cy.get('input').should('have.value', ''); // Ensure the input field is cleared after adding the activity
  });

  it('should not allow adding an activity with less than 2 characters', () => {
    cy.get('input').type('A'); // Input a single character
    cy.get('button').should('be.disabled'); // Button should remain disabled
  });

  it('should dispatch addActivity and clear input field after adding an activity', () => {
    cy.get('input').type('Running');
    cy.get('button').click(); // Click the "Add Activity" button

    // Test if the input is cleared
    cy.get('input').should('have.value', '');

    // Test that the addActivity action was dispatched
    // Assuming that you are using a Cypress Redux plugin or have access to Redux actions in your tests
    cy.window()
      .its('store')
      .invoke('getState')
      .then((state) => {
        expect(state.dayPlanner.chosenActivites).to.include('Running');
      });
  });

  it('should enable the Add Activity button only when the input has more than 1 character', () => {
    cy.get('button').contains('Add Activity').should('be.disabled'); // Button is initially disabled
    cy.get('input').type('R'); // Type a single character
    cy.get('button').should('be.disabled'); // Button should still be disabled

    cy.get('input').type('un'); // Complete the word
    cy.get('button').should('not.be.disabled'); // Button should be enabled now
  });
});
