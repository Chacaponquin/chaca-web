import { createAppRoute } from "cypress/fixtures/route"

describe("# Edit Dataset tests", () => {
  beforeEach(() => {
    cy.visit(createAppRoute("home"))
  })

  it("Click config button. Should show config dropdown", () => {
    cy.get("#User-dataset-config-button").click()
    cy.get("#User-dataset-config-menu").should("exist")
  })

  it("Click edit button. Should show a modal", () => {
    cy.get("#User-dataset-config-button").click()
    cy.get("#User-dataset-config-menu").should("exist")
    cy.get("#User-dataset-edit-button").click()
    cy.get("#app-modal").should("exist")
  })

  it("Try edit dataset name to empty string. Should show an error toast", () => {
    cy.get("#User-dataset-config-button").click()
    cy.get("#User-dataset-config-menu").should("exist")
    cy.get("#User-dataset-edit-button").click()
    cy.get("input[name=dataset-name]").clear()
    cy.get("#modal-edit-dataset-button").click()
    cy.get("#toast-error").should("exist")
  })
})
