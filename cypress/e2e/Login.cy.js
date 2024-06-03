it("Revwit", () => {
  cy.visit("/");

  cy.get('[data-testid="input-Email address"]').type("admin@mypurplepay.com");

  cy.get('[data-testid="input-Password"]')
   .type("Enyata@1234567{enter}")


});
