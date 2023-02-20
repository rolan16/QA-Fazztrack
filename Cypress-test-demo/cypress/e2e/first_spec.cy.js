describe('Login Test', () => {
  it('Success Login', () => {
    cy.visit('/')
    cy.get('#login2').click();
    cy.get('#loginusername').type('rolansiagian');
    cy.get('#loginpassword').type('bullseye');
    cy.get(`[onclick='logIn()']`).click();
    cy.get('#logout2').should('contain', 'Log out');
  })

  it('Failed Login', () => {
    cy.visit('/')
    cy.get('#login2').click();
    cy.get('#loginusername').type('asalajalah');
    cy.get('#loginpassword').type('kambing123');    

    cy.on('window:alert', function(alertText) {
      expect(alertText).eq('User does not exist.')
    })    

    cy.get(`[onclick='logIn()']`).click();
  })
})