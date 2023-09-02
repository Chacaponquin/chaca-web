describe("# Sign up page e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/signUp")
  })

  it("Passes", () => {
    cy.visit("http://127.0.0.1:5173/signUp")
  })

  it("Create user", () => {
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
  })
})
