import { ThemeProvider } from "@lib/context/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

describe("ThemeSwitcher", () => {
  it("Mounts properly", () => {
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
  });

  it("Should have a theme dark on initial mount if there's no theme key", () => {
    cy.clearAllLocalStorage();
    cy.mount(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:8080": {
          theme: "dark",
        },
      });
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
