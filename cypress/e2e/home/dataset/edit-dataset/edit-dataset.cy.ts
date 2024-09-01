import { createAppRoute } from "cypress/fixtures/route"

describe("# Edit Schema tests", () => {
  beforeEach(() => {
    cy.visit(createAppRoute("home"))

    // create dataset
    cy.get("#create-first-dataset-button").click()
    cy.get("#dataset-playground > div").should("have.length", 1)
  })

  it("Try edit dataset name to empty string. Should show an error toast", () => {
    // open menu
    cy.get("#New-Schema-dataset-config-button").click()
    cy.get("#New-Schema-dataset-config-menu").should("exist")

    // open modal
    cy.get("#New-Schema-dataset-edit-button").click()
    cy.get("#edit-dataset-modal").should("exist")

    cy.get("input[name=dataset-name]").clear()
    cy.get("#modal-edit-dataset-button").click()
    cy.get("#toast-empty-dataset-name").should("exist")
  })

  it("Try edit a dataset name to an existing dataset", () => {
    // create other dataset
    cy.get("#create-dataset-button").click()

    // open menu
    cy.get("#New-Dataset_-dataset-config-button").click()
    cy.get("#New-Dataset_-dataset-config-menu").should("exist")

    // open modal
    cy.get("#New-Dataset_-dataset-edit-button").click()
    cy.get("#edit-dataset-modal").should("exist")

    // type name
    cy.get("input[name=dataset-name]").clear().type("New Schema")
    cy.get("#modal-edit-dataset-button").click()
    cy.get("#toast-repeat-dataset-name").should("exist")
  })
})
