describe("Styling", () => {
  describe("Text", () => {
    it("all paragraphs have their font set to 'sans-serif'", () => {
      cy.get("p").each((paragraph) => {
        cy.wrap(paragraph).should("have.css", "font-family", "sans-serif");
      });
    });

    it("all headings have their font set to 'serif'", () => {
      cy.get("h1, h2, h3, h4, h5, h6").each((paragraph) => {
        cy.wrap(paragraph).should("have.css", "font-family", "serif");
      });
    });

    it("all headings have their text centered", () => {
      cy.get("h1, h2, h3, h4, h5, h6").each((paragraph) => {
        cy.wrap(paragraph).should("have.css", "text-align", "center");
      });
    });

    it("all anchor tags have no text decoration", () => {
      cy.get("a").each((a) => {
        cy.wrap(a).should("have.css", "text-decoration-line", "none");
      });
    });

    it("all unvisited anchor tags have a color of #4242EA", () => {
      cy.get("a").each((a) => {
        cy.wrap(a).should("have.css", "color", "rgb(66, 66, 234)");
      });
    });

    it("all unordered lists items have no list-style", () => {
      cy.get("li").each((li) => {
        cy.wrap(li).should("have.css", "list-style-image", "none");
      });
    });

    it("all span tags inside the footer have a font-weight of 700", () => {
      cy.get("footer span").each((span) => {
        cy.wrap(span).should("have.css", "font-weight", "700");
      });
    });

    it("all p tags inside the element with the class of weather should have a font size of 40px", () => {
      cy.get(".weather p").each((p) => {
        cy.wrap(p).should("have.css", "font-size", "40px");
      });
    });
  });

  describe("Above the fold section", () => {
    it("all articles inside the element with a class of 'above-the-fold' have a display of inline-block", () => {
      cy.get(".above-the-fold article").each((article) => {
        cy.wrap(article).should("have.css", "display", "inline-block");
      });
    });

    it("the element with the class of 'weather' has a width of 300px", () => {
      cy.get(".weather").each((article) => {
        cy.wrap(article).should("have.css", "width", "300px");
      });
    });

    it("the element with the class of 'weather' has a 2px gray border on all sides", () => {
      cy.get(".weather").each((article) => {
        cy.wrap(article).should(
          "have.css",
          "border",
          "2px solid rgb(128, 128, 128)"
        );
      });
    });

    it("the element with the class of 'breaking-news' has left/right padding of 30px", () => {
      cy.get(".breaking-news").each((article) => {
        cy.wrap(article).should("have.css", "padding", "0px 30px");
      });
    });
    it("the image inside element with the class of 'breaking-news' has a width of 200px", () => {
      cy.get(".breaking-news img").each((img) => {
        cy.wrap(img).should("have.css", "width", "200px");
      });
    });
  });

  describe("Click-bait section", () => {
    it("all articles inside the element with a class of 'click-bait' have a display of 'inline-block", () => {
      cy.get(".click-bait article").each((article) => {
        cy.wrap(article).should("have.css", "display", "inline-block");
      });
    });

    it("all articles inside the element with a class of 'click-bait' have a width of 250px", () => {
      cy.get(".click-bait article").each((article) => {
        cy.wrap(article).should("have.css", "width", "250px");
      });
    });

    it("all articles inside the element with a class of 'click-bait' have margin and padding on all sides of 16px", () => {
      cy.get(".click-bait article").each((article) => {
        cy.wrap(article).should("have.css", "margin", "16px");
        cy.wrap(article).should("have.css", "padding", "16px");
      });
    });
    it("all articles inside the element with a class of 'click-bait' have box-sizing set to border-box", () => {
      cy.get(".click-bait article").each((article) => {
        cy.wrap(article).should("have.css", "box-sizing", "border-box");
      });
    });
  });

  describe("Below the fold section", () => {
    it("The img inside the element with a class of 'below-the-fold' has a display of inline-block", () => {
      cy.get(".below-the-fold img").each((img) => {
        cy.wrap(img).should("have.css", "display", "inline-block");
      });
    });
    it("The img inside the element with a class of 'below-the-fold' have margin and padding on all sides of 16px", () => {
      cy.get(".below-the-fold img").each((img) => {
        cy.wrap(img).should("have.css", "margin", "16px");
        cy.wrap(img).should("have.css", "padding", "16px");
      });
    });

    it("The img inside the element with a class of 'below-the-fold' has a width of 200px", () => {
      cy.get(".below-the-fold img").each((img) => {
        cy.wrap(img).should("have.css", "width", "200px");
      });
    });

    it("the div inside the element with a class of 'below-the-fold' has a width of 500px", () => {
      cy.get(".below-the-fold div").each((div) => {
        cy.wrap(div).should("have.css", "width", "500px");
      });
    });
  });
});
