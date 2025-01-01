import login from "../PageObject/loginpage"

describe('click spec', () => {

    it('click', () => {
        cy.on("uncaught:exception",()=>{
            return false
        })

      cy.visit('https://cypress.io')
        cy.get('a[href="https://on.cypress.io/installing-cypress"]').first().click({force:true})

    })


    it('Type', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.userNameInput()).type("Admin")

      
      cy.get(login.passwordInput()).type("admin123{enter}")
  })

  it('Dropdown', () => {
    cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
    //Value&Text
    cy.get('select[name^="DOB_Day"]').select("01")

    // Value&Text
    cy.get('select[name^="DOB_Month"]').select("AUG")

    //index
    cy.get('select[name^="DOB_Year"]').select(3)
  
  })
    
  it('CheckBox', () => {
    cy.visit("https://register.rediff.com/register/register.php?FormName=user_details")
    cy.get('input[name^="chk_altemail"]').check()
    cy.get('input[name^="chk_altemail"]').check().should("be.checked")
  })

  it.only('CheckBox', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(login.userNameInput()).type("Admin")
      cy.get(login.passwordInput()).type("admin123{enter}")
      cy.contains("PIM").click()
      cy.get('input[type="checkbox"]').check(["2","3"],{force:true})



     // cy.get('input[type="checkbox"]').uncheck({force:true})
  })
  })