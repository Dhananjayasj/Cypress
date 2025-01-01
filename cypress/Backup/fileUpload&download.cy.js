describe('File upload and Download', () => {
    it('File uploading using .selectFile method', () => {
      cy.visit('https://the-internet.herokuapp.com/upload')
      cy.get('input[name="file"]').selectFile("D:/CypressAutomation/cypress/fixtures/testfile/PO802S240128917DhananjayS.pdf")
      cy.get('input[type="submit"]').click()
    })
    it('File uploading using plugins', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input[name="file"]').attachFile('testfile/PO802S240128917DhananjayS.pdf')
        cy.get('input[type="submit"]').click()
      })
      it.only('File downloading using plugins', () => {
        cy.downloadFile('https://in.pinterest.com/pallavir3105/appu-punith/',"cypress/downloads",'mypg.jpeg')
      })
  })