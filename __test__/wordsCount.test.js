import { wordsCount as wordsCount } from "../src/client/js/wordsCount";

describe("Testing of wordsCount", () => {
  test("if contains more than 5 words ", () => {
    expect(wordsCount("j")).toBe(1);
    expect(wordsCount("be nice")).toBe(2);
    expect(wordsCount("be nice ")).toBe(2);
    expect(wordsCount("1")).toBe(1);
    expect(wordsCount("hey how are you")).toBe(4);
    expect(wordsCount(" hey how are you")).toBe(4);
    expect(wordsCount(" hey how are you ")).toBe(4);
    expect(wordsCount("hey how are you ,")).toBe(5);
    expect(wordsCount("   ")).toBe(0);
    expect(wordsCount("...")).toBe(1);
    expect(wordsCount("a  a")).toBe(2);
  });
});
