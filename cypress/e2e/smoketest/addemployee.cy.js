import login from "../PageObject/loginpage"

import dashBoard from "../PageObject/dashboardpage"

import addEmployee from "../PageObject/addemployeepage"


describe('Verify add employee functionality', () => {

  it('Verify add employee with mandatory details', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.visit('/web/index.php/auth/login')

   // login.loginwithcreds("Admin","admin123")

    cy.get(login.userNameInput()).type("username")
    cy.get(login.passwordInput()).type("password")
    cy.get(login.loginBtn()).click()
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
    //cy.contains(login.loginErrorMessage()).should("be.visible")
    
    cy.get(dashBoard.pimMenu()).click()
    //cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(2) > a').click()
    cy.contains(addEmployee.addEmployeeSubMenu()).click()

    cy.get(addEmployee.firstNameInput()).type('Dhananjay')
    cy.get(addEmployee.lastNameInput()).type('s')
    cy.get(addEmployee.saveButton()).click()
  }) 
  it('Verify logo vissible in login page', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get(login.orangeHRMLogo()).should("be.visible")
  })
}) 