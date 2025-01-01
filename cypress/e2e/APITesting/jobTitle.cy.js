import data from "../../fixtures/APIData/addemployee.json"

describe('Verify GET Job Title API',()=>{
    it('Verify GET Job Title API is working',()=>{
        cy.request({
            method:"GET",
            url:"/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC",
            headers:{
            "cookie":Cypress.env("cookievalue")
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.data[0].title).to.equal('Automaton Tester')
            cy.writeFile("cypress/fixtures/APIresponse/sample.txt",response)
        })

        
    })

    it('Verify GET Job Title API for 401',()=>{
        cy.request({
            method:"GET",
            url:"/web/index.php/api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC",
            headers:{
            "cookie":"jbjhvvkvn bjh "
            },
            failOnStatusCode:false
        }).then((response)=>{
            expect(response.status).to.equal(401)
            
        })

        
    })

    it.skip('Verify create employee POST Request',()=>{
        data.employeeId=(Math.random()+ 1).toString(36).substring(5);
        cy.request({
            method:"POST",
            url:'/web/index.php/api/v2/pim/employees',
            headers:{
            "cookie":Cypress.env("cookievalue")
            },
            body:data

        }).then((response)=>{
            expect(response.status).to.equal(200)
            cy.writeFile("cypress/fixtures/APIresponse/sample1.txt",response)
        })

        
    })
})