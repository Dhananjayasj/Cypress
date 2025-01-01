describe('Iframes', () => {
    it('iframes ', () => {
      cy.visit('https://jqueryui.com/checkboxradio/')

        cy.get('iframe[class="demo-frame"]').then((iframe=>{
        let radio1 =iframe.contents().find('label[for="radio-1"]')
        cy.wrap(radio1).click({force:true})
        }))
        cy.get('iframe[class="demo-frame"]').then((iframe=>{
            let checkbox =iframe.contents().find('label[for="checkbox-1"]')
            cy.wrap(checkbox).click({force:true})
            }))
        

    })
  })