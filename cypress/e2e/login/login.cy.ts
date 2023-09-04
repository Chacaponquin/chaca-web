describe("# Login page e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login")
  })

  it("Passes", () => {
    cy.visit("http://localhost:5173/login")
  })

  it("Click redirect to sign up page", () => {
    cy.get("#redirect-signup-button").click()
    cy.url().should("include", "/signUp")
  })
})
