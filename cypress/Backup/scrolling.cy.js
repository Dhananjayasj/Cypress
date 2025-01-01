describe('Scrolling', () => {
    it('Scrolling the webpage', () => {
    
    cy.visit('https://trello.com/')  
    cy.contains('Do more with Trello').scrollIntoView()
    

    })
  })