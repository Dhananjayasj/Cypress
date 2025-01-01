describe('Demo Conditional testing', () => {
    beforeEach(() => {
        cy.visit('https://www.wikipedia.org/')
        //cy.title().should('eq','wikipedia')
    })
    it('Check that if your wikivoyoge in page,then click on it and validate(goto if)', () => {
        cy.wait(3000)
        cy.get('body').then((body)=>{
            if(body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.wait(3000)
                cy.origin('https://www.wikivoyage.org/',()=>{
                   // cy.title().should('eq', 'wikivoyage')
                })
            }
            else{
                cy.get('[data-jsl10n="wiktionary.name"]').click()
                cy.wait(3000)
                cy.origin('https://www.wiktionary.org/',()=>{
                    //cy.title().should('eq', 'wiktionary')
                })
            }
    })  
      
    })
  })