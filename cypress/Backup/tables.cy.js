describe('Tables Verification in Wegpage', () => {
    it('To verify how many tables are present in webpages ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('table').its('length').then((count)=>{
            cy.log("No of tables are="+count)
        })
    })
    it('To verify 2 tables are present in webpages ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get("table").should("have.length",2)
    })
    it('To verify 4rows are present in webpages ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').should("have.length",4)
    })
    it('To verify coloums count ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr:nth-child(1)>td').should("have.length",6)
    })
    it('To verify text present in table ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr:nth-child(2)>td:nth-child(3)').then((text)=>{
            var txvalue=text.text()
            cy.log(txvalue)
            expect(txvalue).to.equal('fbach@yahoo.com')
        })
    })
    it('another way verify text present in web page ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr:nth-child(2)>td:nth-child(3)').should('have.text',"fbach@yahoo.com")
    })
    it('To print entire table data ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('#table1>tbody>tr').each((rows)=>{
            cy.wrap(rows).within((celldata)=>{
                cy.log(celldata.text())
            })
        })
    })
    it('Doe ', () => {
      
        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.contains('Doe').parent().within(()=>{
            cy.get('td').eq(5).find('a[href="#delete"]').click()
            cy.get('td').eq(3).should("have.text",'$100.00')
        })
        
    })

  })