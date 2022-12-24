import { Input } from "./Input";

describe("Custom Input Element", () => {
  it("mounts component", () => {
    cy.mount(
      <Input
        id="input"
        label="Input"
        placeholder="Enter Something"
        type="text"
      />
    );
  });
  it("must accepts id, label, and type as required props", () => {
    cy.mount(
      <Input
        id="input"
        label="Input"
        placeholder="Enter Something"
        type="text"
      />
    );
    cy.get("input").should("have.attr", "id", "input");
    cy.get("input").should("have.attr", "type", "text");
    cy.get("input").should("have.attr", "placeholder", "Enter Something");
    cy.get("label").should("have.text", "Input");
  });
});
