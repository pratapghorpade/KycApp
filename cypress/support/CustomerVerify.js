

Cypress.Commands.add('Customer_Verify', () => { 
 
                                        cy.visit('https://testkyc.goldenpi.com/global-kyc/email-verify');

                                        const email = 'pratap.ghorpade@gmail.com';
                                        cy.get('#email').type(email);

                                        cy.get('#submit').click(); 



})