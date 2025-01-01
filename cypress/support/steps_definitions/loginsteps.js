import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import login from"../../e2e/PageObject/loginpage"

Given('user Launch the application',()=>{
})

When('user Enter username {strinng} And Enter password {string}',(username,password)=>{
cy.get(login.userNameInput()).type(username)
cy.get(login.passwordInput()).type(password)    

})