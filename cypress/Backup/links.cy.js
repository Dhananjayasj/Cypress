describe('deals with lunks', () => {
    it('to check how manyb links are present in webpage', () => {

      cy.visit('https://www.flipkart.com/?s_kwcid=AL!739!3!582822043580!b!!g!!flipkart&gclsrc=aw.ds&&semcmpid=sem_8024046704_brand_exe_buyers_goog&gad_source=1&gclid=Cj0KCQiA4L67BhDUARIsADWrl7GSSQW1M_D8vOyfkYhjm73uhGiwKte76GWMel9IK8W1uuCKcfgGFQ4aAk5KEALw_wcB')
        cy.get('a').its('length').then((count)=>{
            cy.log("No of links are ="+count)
            
        })
    })
    it.only('to check how manyb links are present in webpage', () => {
    cy.visit('https://trello.com/')
    cy.contains('Log in').click()
    cy.origin('https://id.atlassian.com',()=>{
        cy.get('#username').type('dhanu@gmail.com')
        cy.get('button[type="submit"]').click()
    })
    })
  })