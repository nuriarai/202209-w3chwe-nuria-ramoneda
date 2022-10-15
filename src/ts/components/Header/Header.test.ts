import Header from "./Header";

describe("Given a component Header", () => {
  describe("When its rendered with the title 'Pokemon's List' ", () => {
    test("Then it should show the text 'Pokemon's List' inside an H1 element", () => {
      const title = "Parent's List";
      const screen = document.createElement("div");

      const header = new Header(screen, title);
      header.render();
      const heading = header.domElement.querySelector("h1");

      expect(heading.textContent).toBe(title);
    });
  });
});
