describe("# Sign up page e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/signUp")
  })

  it("Passes", () => {
    cy.visit("http://localhost:5173/signUp")
  })

  it("Redirect to login", () => {
    cy.get("#redirect-login-button").click()
    cy.url().should("include", "/login")
  })

  it("Create an existing user. Should show an error toast", () => {
    cy.get("input[name=username]").clear().type("Chacaponquin")
    cy.get("input[name=password]").clear().type("hectico2511")
    cy.get("input[name=confirm_password]").clear().type("hectico2511")
    cy.get("input[name=email]").clear().type("hector1234@gmail.com")
    cy.get("button[type=submit]").click()

    cy.get("#loader").should("exist")
    cy.get("input[name=username]").should("be.disabled")
    cy.get("input[name=password]").should("be.disabled")
    cy.get("input[name=confirm_password]").should("be.disabled")
    cy.get("input[name=email]").should("be.disabled")

    cy.get("#toast-error").should("exist")
  })
})
