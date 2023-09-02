describe("# Sign up page e2e tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/signUp")
  })

  it("Passes", () => {
    cy.visit("http://127.0.0.1:5173/signUp")
  })

  it("Create user", () => {
    cy.get("input[name=username]").type("Chacaponquin")
    cy.get("input[name=password]").type("hectico2511")
    cy.get("input[name=confirm_password]").type("hectico2511")
    cy.get("input[name=email]").type("hector1234@gmail.com")
    cy.get("button[type=submit]").click()

    cy.get("#loader")
  })
})
