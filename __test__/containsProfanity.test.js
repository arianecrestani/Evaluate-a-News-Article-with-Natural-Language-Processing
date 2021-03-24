import { containsProfanity as containsProfanity} from "../src/client/js/containsProfanity";

describe("Testing of negativWord", () => {
  test("if has some negativWord will be true", () => {
    expect(containsProfanity("")).toBe(false);
    expect(containsProfanity("hello")).toBe(false);
    expect(containsProfanity("fuck")).toBe(true);
    expect(containsProfanity("ass")).toBe(true);
    expect(containsProfanity("give me your ass")).toBe(true);
    expect(containsProfanity("A")).toBe(false);
    
  });
});
