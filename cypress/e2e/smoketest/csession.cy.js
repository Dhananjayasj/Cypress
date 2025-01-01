import addEmployee from "../PageObject/addemployeepage"

describe('Validate Orange HRM Login functionality',function () {
    beforeEach(function(){
        cy.session("Login session",()=>{
            cy.login('Admin','admin123')
        })
    })
    it('validate Add job title',function () {
      cy.visit('/web/index.php/admin/viewJobTitleList');
      
      //let r=(Math.random() + 1).toString(36).substring(7);
      //cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Senior Analyst"+r)
     // cy.get('button[type="submit"]').click()
    })

    it('validate Add employee',function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
        cy.addEmployee("Raju","G")
      })
    

  })