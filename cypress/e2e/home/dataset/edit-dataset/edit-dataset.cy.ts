import { createAppRoute } from "cypress/fixtures/route"

describe("# Edit Dataset tests", () => {
  beforeEach(() => {
    cy.visit(createAppRoute("home"))

    // create dataset
    cy.get("#create-first-dataset-button").click()
    cy.get("#dataset-playground > div").should("have.length", 1)

    // open menu
    cy.get("#New-Dataset-dataset-config-button").click()
    cy.get("#New-Dataset-dataset-config-menu").should("exist")

    // open modal
    cy.get("#New-Dataset-dataset-edit-button").click()
    cy.get("#edit-dataset-modal").should("exist")
  })

  it("Try edit dataset name to empty string. Should show an error toast", () => {
    cy.get("input[name=dataset-name]").clear()
    cy.get("#modal-edit-dataset-button").click()
    cy.get("#toast-empty-dataset-name").should("exist")
  })
})
