import { reverseString } from "../modules/reverseString";

it("reverseString Test -- works with single letter Test 1", () => {
  expect(reverseString("a")).toBe("a");
});

it("reverseString Test -- works with single letter Test 2", () => {
  expect(reverseString("z")).toBe("z");
});

it("reverseString Test -- Works with empty string", () => {
  expect(reverseString("")).toBe("");
});

it('reverseString Test -- Works with even number chars', () => {
 expect(reverseString('aaBB')).toBe('BBaa');
});

it('reverseString Test -- Works with odd number chars', () => {
 expect(reverseString('abb')).toBe('bba');
});

it('reverseString Test -- Works on sentences', () => {
 expect(reverseString('a cat ate a dog')).toBe('god a eta tac a');
});