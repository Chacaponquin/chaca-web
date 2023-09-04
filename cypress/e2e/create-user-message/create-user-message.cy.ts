describe("# Create user message e2e test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/contactUs")
  })

  it("Passes", () => {
    cy.visit("http://localhost:5173/contactUs")
  })

  it("Create correct user message", () => {
    cy.get("input[name=email]").clear().type("test@gmail.com")
    cy.get("textarea[name=message]").clear().type("test message")
    cy.get("input[name=title]").clear().type("test title")
    cy.get("button[type=submit]").click()

    cy.get("#message-success-modal").should("exist")
  })

  it("Create message with empty email. Should show a toast error", () => {
    cy.get("input[name=email]").clear()
    cy.get("textarea[name=message]").clear().type("test message")
    cy.get("input[name=title]").clear().type("test title")
    cy.get("button[type=submit]").click()

    cy.get("#toast-error").should("exist")
  })

  it("Create message with empty title. Should show a toast error", () => {
    cy.get("input[name=email]").clear().type("test@gmail.com")
    cy.get("textarea[name=message]").clear().type("test message")
    cy.get("input[name=title]").clear()
    cy.get("button[type=submit]").click()

    cy.get("#toast-error").should("exist")
  })

  it("Create message with empty message. Should show a toast error", () => {
    cy.get("input[name=email]").clear().type("test@gmail.com")
    cy.get("textarea[name=message]").clear()
    cy.get("input[name=title]").clear().type("test title")
    cy.get("button[type=submit]").click()

    cy.get("#toast-error").should("exist")
  })
})
