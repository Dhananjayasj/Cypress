import data from "../../fixtures/Exceltojson/user_data.json"
import login from "../PageObject/loginpage"
describe('Automation - Working with data driven testing json', function() {
    data.forEach((data)=>{
        it(`Cypress Test case - for ${data.username}`,function() {
            cy.login(data.username,data.password)
         cy.contains(login.loginErrorMessage()).should('be.visible')
          }) 
    })

  })