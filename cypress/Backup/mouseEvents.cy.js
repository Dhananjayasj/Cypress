describe('Mouse Event', () => {
    it('Mouse', () => {
        cy.visit('https://trello.com/')
        cy.get('a[class="Buttonsstyles__Button-sc-1jwidxo-0 kTwZBr"]').trigger('mousemove').click()
    })
  })