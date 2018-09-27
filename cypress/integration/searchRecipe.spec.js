describe("Search Recipe", () => {
  context("Searching for carrot", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080/");
      cy.wait(500);
      cy.get(".searchBox").type("carrot");
      cy.wait(500);
    });

    it("should display 20 results", () => {
      cy.get(".recipeList")
        .children()
        .should("have.length", 20);
    });

    it("should not have any error message", () => {
      cy.get("#error").should("have.value", "");
    });
  });

  context("Searching for invalid characters", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8080/");
      cy.wait(500);
      cy.get(".searchBox").type("%^&");
      cy.wait(500);
    });

    it("should display 0 results", () => {
      cy.get("#results")
        .children()
        .should("have.length", 0);
    });

    it("should display error message", () => {
      cy.get(".error").should(
        "contain",
        "You can only enter alphanumeric values.",
      );
    });
  });
});
