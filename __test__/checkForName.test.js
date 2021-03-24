import { checkForName } from "../src/client/js/nameChecker";
describe("Testing of negativWord", () => {
  test("if has some negativWord will be true", () => {
    expect(checkForName("")).toBe(false);
  });
});
