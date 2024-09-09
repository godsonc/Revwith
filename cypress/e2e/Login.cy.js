it("Revwit", () => {
  cy.visit("/");

 



  /* ==== Generated with Cypress Studio ==== */
  cy.get('#txtFirstname').clear('Godson');
  cy.get('#txtFirstname').type('Godson');
  cy.get('#txtLastname').clear('Dolapo');
  cy.get('#txtLastname').type('Dolapo');
  cy.get('#txtEmail').clear('dolapo@yopmail.com');
  cy.get('#txtEmail').type('dolapo@yopmail.com');
  cy.get('#txtEmail').clear('dolapoo@yopmail.com');
  cy.get('#txtEmail').type('dolapoo@yopmail.com');
  cy.get('.inline-flex > .font-sans').clear('P');
  cy.get('.inline-flex > .font-sans').type('P@ssword01');
  cy.get('#btnContinue > .duration-200').click();
  cy.get(':nth-child(3) > :nth-child(2) > .relative > .font-sans').clear('R');
  cy.get(':nth-child(3) > :nth-child(2) > .relative > .font-sans').type('Rev');
  cy.get(':nth-child(4) > .relative > .font-sans').clear('0');
  cy.get(':nth-child(4) > .relative > .font-sans').type('09 Ajah ');
  cy.get('#pv_id_2 > .font-sans').click();
  cy.get('#pv_id_2_1').click();
  cy.get('.mt-4').click();
  cy.get('.justify-around > :nth-child(1)').click();
  cy.get('.xl\\:mt-8').click();
  cy.get('.xl\\:mt-8').click();
  // cy.get('.max-sm\\:text-xs').click();
  /* ==== End Cypress Studio ==== */
});
