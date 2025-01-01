describe('Image Verification', () => {
    it('Image', () => {

        cy.visit('/web/index.php/auth/login')
        cy.get('img[alt="company-branding"]').should("exist")
        cy.get('img[alt="company-branding"]').should("be.visible")
        cy.get('img[alt="company-branding"]').should("have.attr","src","/web/images/ohrm_branding.png?v=1721393199309")

    })
  })