import { createAppRoute } from "cypress/fixtures/route"

describe("# Create dataset test", () => {
  beforeEach(() => {
    cy.visit(createAppRoute("home"))
  })

  it("Create a single dataset. Should show a new dataset card", () => {
    cy.get("#create-first-dataset-button").click()
    cy.get("#dataset-playground > div").should("have.length", 1)
  })

  it("Create a three sequential datasets. Should show a three new dataset card", () => {
    cy.get("#create-first-dataset-button").click()
    cy.get("#create-dataset-button").click().click()
    cy.get("#dataset-playground > div").should("have.length", 3)
  })
})
