


describe('Delete', ()=> {
          
    it ("Delete Customer Details", ()=>  {

        
        cy.Deletusers().then((resp) => {
                                      //  expect(resp.body.statusCode).to.eq(200);
                                      cy.softAssert(resp.body.statusCode, 200, resp.body.errorMessage); 
                                          

            }) 

    })
})

