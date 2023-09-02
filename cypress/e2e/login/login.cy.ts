describe("# Login page e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/login")
  })

  it("Passes", () => {
    cy.visit("http://127.0.0.1:5173/login")
  })

  it("Click redirect to sign up page", () => {
    cy.get("#redirect-signup-button").click()
    cy.url().should("include", "/signUp")
  })
})
