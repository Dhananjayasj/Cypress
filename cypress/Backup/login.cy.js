describe('Verify login Functionality', () => {
    it('Verify logo vissible in login page', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible")
    })

    it('Verify login with vaild credentials ', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin123")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    })

    it('Verify login with vaild username and Invalid password ', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Admin")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin1234")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible")
    })

    it('Verify login with Invaild username and Invalid password ', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img").should("be.visible")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input").type("Aadmin")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input").type("admin1234")
      cy.get("#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button").click()
      cy.get("p.oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible")
    })
  })



