
//import Auth2 from "/home/dharapajwani/APIAutomation/KycApp/cypress/Payload/Auth2.json"

Cypress.Commands.add('WriteFile', (CustID, PanNumber) => {

    cy.fixture('Auth2').then( (Auth2) => {


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
                                                            authToken: Auth2.Auth,
                                                            apiKey: "deleteCustomerForQa",
                                                            apiParam: {
                                                            customerId: [CustID]
                                                            }
                                   
     })
})
})

