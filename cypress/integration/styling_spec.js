describe("Styling", () => {
  describe("Text", () => {
    it("all paragraphs have their font set to 'Helvetica, sans-serif'", () => {
      cy.get("p").each((paragraph) => {
        cy.wrap(paragraph).should(
          "have.css",
          "font-family",
          "Helvetica, sans-serif"
        );
      });
    });

    it("all headings have their font set to 'Gerogia, serif'", () => {
      cy.get("h1, h2, h3, h4, h5, h6").each((paragraph) => {
        cy.wrap(paragraph).should("have.css", "font-family", "Georgia, serif");
      });
    });

    it("all text inside the `body` element is centered", () => {
      cy.get("body").should("have.css", "text-align", "center");
    });
  });

  describe("Images", () => {
    it("should have an image with the class 'profile-photo'", () => {
      cy.get("img.profile-photo").should("exist");
    });

    it("should style all images with the 'profile-photo' class so they have a border that is `1px` wide, solid, and the color `blue`", () => {
      cy.get("img.profile-photo").should(
        "have.css",
        "border",
        "1px solid rgb(0, 0, 255)"
      );
    });
  });

  describe("Headers", () => {
    it("should style all headers as being bold and having a blue underline", () => {
      cy.get("h1, h2, h3, h4, h5, h6").each((heading) => {
        cy.wrap(heading)
          .should("have.css", "font-weight", "700")
          .should(
            "have.css",
            "text-decoration",
            "underline solid rgb(0, 0, 255)"
          );
      });
    });

    it("should have an `h2` with the class 'skills-header'", () => {
      cy.get("h2.skills-header").should("exist");
    });

    it("should style the 'skills-header' class so that the text is 'rebeccapurple'", () => {
      cy.get("h2.skills-header")
        .should("exist")
        .contains("Here are some of my Skills!")
        .should("have.css", "color", "rgb(102, 51, 153)");
    });
  });

  describe("Links", () => {
    it("should have links be the color `red`", () => {
      cy.get("a").each((link) => {
        cy.wrap(link).should("have.css", "color", "rgb(255, 0, 0)");
      });
    });
  });

  describe("Language list items", () => {
    it("should have a `ul` with the class 'languages-list'", () => {
      cy.get("ul.languages-list").should("exist");
    });

    it("should set all list items within 'languages-list' to have a globe image as a bullet point", () => {
      cy.get(".languages-list")
        .invoke("css", "list-style-image")
        .should("contain", "globe.png");
    });

    it("should not change any other list items", () => {
      cy.get(".languages-list")
        .invoke("css", "list-style-image")
        .should("contain", "globe.png");

      cy.get("ul")
        .last()
        .invoke("css", "list-style-image")
        .should("not.contain", "globe.png");
    });
  });
});
