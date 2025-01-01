describe('Darg an drop', () => {
    it('Drag and drop using dot drag', () => {

      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
      cy.get('#menu-fried-chicken').drag('#plate-items') 
      cy.get('#menu-hamburger').drag('#plate-items')

    })

    it.only('Drag and drop using dot tigger() of DataTransfer class', () => {

        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        const dataTransfer = new DataTransfer();
        cy.get('#menu-hamburger').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop',{
            dataTransfer
        })
        
        cy.get('#menu-fried-chicken').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop',{
            dataTransfer
        })

      })

  })