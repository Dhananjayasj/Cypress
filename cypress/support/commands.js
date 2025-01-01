// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import login from "../e2e/PageObject/loginpage"
import addEmployee from "../e2e/PageObject/addemployeepage";

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-downloadfile/lib/downloadFileCommand')
Cypress.Commands.add('login',(username,password)=> {
    cy.visit('/web/index.php/auth/login')
    cy.log("url Lauch")
    cy.get(login.userNameInput()).type(username)

    cy.log("User typed is "+username)

    cy.get(login.passwordInput()).type(password)
    cy.get(login.loginBtn()).click()
    //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    
})

Cypress.Commands.add('addEmployee', (firstname, lastname) => { 
    cy.get(addEmployee.firstNameInput()).type(firstname)
    cy.get(addEmployee.lastNameInput()).type(lastname)
    cy.get(addEmployee.saveButton()).click()
    cy.contains(addEmployee.successMessage()).should('be.visible')
    cy.url().should("include","web/index.php/pim/viewPersonalDetails/empNumber")
 })
