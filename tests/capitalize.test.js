import { capitalize } from "../modules/capitalize";

it("should make a go to A", () => {
  expect(capitalize("a")).toBe("A");
});

it("Should make z go to Z", () => {
  expect(capitalize("z")).toBe("Z");
});

it('Capitalize only first character of word -- Test 1', () => {
 expect(capitalize('this')).toBe('This');
});

it('Capitalize only first character of word -- Test 2', () => {
 expect(capitalize('bullfrog')).toBe('Bullfrog');
});

it('Fixes uppercase letters to lower when not first letter -- Test 1', () => {
 expect(capitalize('buLLFrOg')).toBe('Bullfrog');
});

it('Fixes uppercase letters to lower when not first letter -- Test 2', () => {
 expect(capitalize('BulLFroG')).toBe('Bullfrog');
});

it('Capitalize first character in every word of a sentence', () => {
 expect(
   capitalize('capitalize first character every word in sentence'))
   .toBe('Capitalize First Character Every Word In Sentence');
});