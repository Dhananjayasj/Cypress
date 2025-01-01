describe('Write file', () => {
    it('Writefile example', () => {
        cy.writeFile('cypress/fixtures/Buzz/text.txt',"Dhanu\n")
        cy.writeFile('cypress/fixtures/Buzz/text.txt',"Dhananjay\n")
        cy.writeFile('cypress/fixtures/Buzz/text.txt',"dhanu\n",{flag:'a+'})
    })
    it('Sample test 2', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('p[class="oxd-text oxd-text--p"]').first().then((txt)=>{
            var usertext=txt.text()
            cy.writeFile('cypress/fixtures/Buzz/creds.txt', usertext+"\n")
        })
        cy.get('p[class="oxd-text oxd-text--p"]').last().then((txt)=>{
            var passwordtext=txt.text()
            cy.writeFile('cypress/fixtures/Buzz/creds.txt',passwordtext,{flag:'a+'})
        })
    })
    it('To create Json file', () => {
        cy.writeFile('cypress/fixtures/Buzz/test6.json',{'firstname':'Raju','lastname':'G'})
        
    })
    it('Extract text and saving into json file', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('p[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').then((txt)=>{
            var textvalue=txt.text()
            cy.writeFile('cypress/fixtures/Buzz/exrat.txt',textvalue)
            cy.readFile('cypress/fixtures/Buzz/test6.json').then((data)=>{
                data.newkey={'extractedtext':textvalue}
                cy.writeFile('cypress/fixtures/Buzz/test6.json',JSON.stringify(data))
            })
        })
        
    })
    it('Validation of both textfile and Json file', () => {
        cy.readFile('cypress/fixtures/PIM/addemployee.json').its('firstname').should('eq','Raju')
        cy.readFile('cypress/fixtures/PIM/addemployee.json').its('lastname').should('eq','G') 
    })
    it('To verify file is exist or not', () => {
        cy.readFile('cypress/fixtures/Admin/addjobtitle.json').should('exist')
        cy.readFile('cypress/fixtures/Admin/addjobtitle.json').its('jobtitle').should('eq','SDET 1')
        cy.readFile('cypress/fixtures/Admin/addjobtitle.json').its('jobdescription').should('eq','Automation Testing') 
    })
  })