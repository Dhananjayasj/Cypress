describe("My test suite name",() =>{
    after("After all",()=>{
        cy.log("After all test case I want print this")
    })

    before("Before  all",()=>{
        cy.log("Before 1st test I want print this")
    })

    
    beforeEach("Before Each  all",()=>{
        cy.log("Before each  I want print this")
    })
    afterEach("After Each  all",()=>{
        cy.log("After each  I want print this")
    })



    it("Test case 1 Title",() =>{
        cy.log("This is 1st test case body")
    })

    it("Test case 2 Title",() =>{
        cy.log("This is 2nd test case body")
    })

    it("Test case 3 Title",() =>{
        cy.log("This is 3rd test case body")
    })

})