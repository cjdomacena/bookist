import { Button } from "./Button";

describe("Button", () => {
  it("Mounts Button Properly", () => {
    cy.mount(<Button />);
  });
});
