import { ThemeProvider } from "@lib/context/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

beforeEach(() => {
  cy.clearLocalStorage();
});

describe("ThemeSwitcher", () => {
  it("Mounts properly", () => {
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
  });

  it("Should have a theme dark on initial mount if there's no theme key", () => {
    cy.clearLocalStorage();
    let port: string;
    cy.window().then((win) => {
      port = win.location.port;
    });

    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    cy.getAllLocalStorage({ log: true }).then((result) => {
      if (result) {
        expect(result).to.deep.equal({
          [port === "8081" ? "http://localhost:8081" : "http://localhost:8080"]:
            {
              theme: "dark",
            },
        });
      }
    });
  });

  it("Should switch theme from light to dark", () => {
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    cy.getBySel("theme-context").click();
    cy.getBySel("light-switch").click();
    cy.getBySel("theme-context").should("have.attr", "title", "light");
  });

  it("Should switch theme from dark to light", () => {
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    cy.getBySel("theme-context").click();
    cy.getBySel("dark-switch").click();
    cy.getBySel("theme-context").should("have.attr", "title", "dark");
  });

  it("Should switch theme from dark to media", () => {
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    cy.getBySel("theme-context").click();
    cy.getBySel("media-switch").click();

    cy.getBySel("theme-context").should("have.attr", "title", "system");
  });
});
