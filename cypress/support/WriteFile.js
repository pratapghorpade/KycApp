


Cypress.Commands.add('WriteFile', (CustID, PanNumber) => {

    cy.writeFile("../KycApp/cypress/fixtures/KycStatus.json", {                                               
                              customerId: CustID,
                              panNo: PanNumber,
                          }) 

    cy.writeFile("../KycApp/cypress/fixtures/CheckOutUrl_Payload.json", {
                          customerId: CustID,
                          type: "",
                          checkoutReturnUrl:  "https://goldenpiplus.com/sovereign-gold-bond",
                      
                      })   
    
    cy.writeFile("../KycApp/cypress/fixtures/deleteuser.json", 
                          {
                          authToken: "ry6GnRCoqFwK971MGZMVJnCHTxuZDGTaafFQmTGK79ePzyzQ2gBXO7AUX8MTPr0U",
                          apiKey: "deleteCustomerForQa",
                          apiParam: {
                          customerId: [CustID]
                          }
})

})