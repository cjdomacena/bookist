import { LoginForm } from "./LoginForm";

export {};

describe("Register Form", () => {
  it("Mounts properly", () => {
    cy.mount(<LoginForm />);
  });
  it("Must be able to submit with all valid inputs", () => {
    cy.mount(<LoginForm />);
    cy.get("form").within(() => {
      cy.get("#email").type("test@test.com");
      cy.get("#password").type("Password123");
      cy.root().submit();
      cy.intercept("POST", "/auth/login", (req) => {
        req.reply({ error: false });
      });
    });
  });

  it("must show error message when email is invalid", () => {
    cy.mount(<LoginForm />);
    cy.get("form").within(() => {
      cy.get("#email").type("test@test");
      cy.get("#password").type("Password123");
      cy.root().submit();
      cy.get("#email").get("p").should("have.text", "Invalid email");
    });

    cy.intercept("POST", "/auth/login", (req) => {
      req.reply({ error: false });
    });
  });

  it("must show error message when password is invalid", () => {
    cy.mount(<LoginForm />);
    cy.get("form").within(() => {
      cy.get("#email").type("test@test.com");
      cy.get("#password").type("passw");
      cy.root().submit();
      cy.get("#password")
        .get("p")
        .should("have.text", "String must contain at least 8 character(s)");
    });

    cy.intercept("POST", "/auth/register", (req) => {
      req.reply({ error: false });
    });
  });

  it("Must show error", () => {
    cy.mount(<LoginForm />);
    cy.get("form").within(() => {
      cy.get("#email").type("test@test.com");
      cy.get("#password").type("password123");
      cy.root().submit();
    });

    cy.intercept("POST", "/auth/login", (req) => {
      req.reply({
        error: {
          message: "Something went wrong",
          status: 401,
        },
      });
    });

    cy.getBySel("errorMessage").should("be.visible");
  });
});
