import { createAppRoute } from "cypress/fixtures/route"

describe("# Create Dataset Field tests", () => {
  beforeEach(() => {
    cy.visit(createAppRoute("home"))

    // create dataset
    cy.get("#create-first-dataset-button").click()
    cy.get("#dataset-playground > div").should("have.length", 1)

    // open modal
    cy.get("#create-first-field-button").click()
    cy.get("#add-field-modal").should("exist")
  })

  it("Try create a field with empty name. Should show an toast error", () => {
    cy.get("input[name=field-name]").clear()
    cy.get("#modal-add-field-button").click()
    cy.get("#toast-empty-field-name").should("exist")
  })
})
