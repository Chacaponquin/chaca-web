describe("# Create user message e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/contactUs")
  })

  it("Passes", () => {
    cy.visit("http://localhost:5173/contactUs")
  })

  it("Create correct user message", () => {
    cy.get("#loader").should("exist")
    cy.get("#message-success-modal").should("exist")
  })
})
