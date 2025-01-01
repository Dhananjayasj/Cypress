
describe('Alerts Example', () => {
    it('Ok Alerts', () => {

     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
     cy.contains('Click for JS Alert').click()
     cy.on('window.alert',(alert) => {
     expect(alert).to.equal("I am a JS Alert")
        return true
     })

    })

    it('confirm Alerts', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.contains('Click for JS Confirm').click()

        cy.on('window.confirm',(alert) => {
       
           return true
        })
   
       })

       it('Prompt Alerts to click ok', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //cy.contains('Click for JS Prompt').click()

        cy.window().then(($win)=>{
            cy.stub($win,"prompt").returns("Raju")
            cy.contains('Click for JS Prompt').click()
        })
   
       })

       it('Prompt Alerts to click cancel', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        //cy.contains('Click for JS Prompt').click()

        cy.window().then(($win)=>{
            cy.stub($win,"prompt").callsFake(()=>null)
            cy.contains('Click for JS Prompt').click()
        })
   
       })
  })