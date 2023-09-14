describe("# Create Dataset Field tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/home")
  })

  it("Click create dataset field button. Should show the creation modal", () => {
    cy.get("#create-field-button").click()
    cy.get("#app-modal").should("exist")
  })
})
