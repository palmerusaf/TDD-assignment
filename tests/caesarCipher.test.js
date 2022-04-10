import { caesarCipher } from "../modules/caesarCipher";

it("caesarCipher Test -- shifts one letter Test 1", () => {
  expect(caesarCipher("a")).toBe("b");
});

it("caesarCipher Test -- shifts one letter Test 2", () => {
  expect(caesarCipher("b")).toBe("c");
});

it("caesarCipher Test -- keeps case Test 1", () => {
  expect(caesarCipher("A")).toBe("B");
});

it("caesarCipher Test -- keeps case Test 2", () => {
  expect(caesarCipher("B")).toBe("C");
});

it("caesarCipher Test -- multiple letters Test 1", () => {
  expect(caesarCipher("BB")).toBe("CC");
});

it("caesarCipher Test -- multiple letters Test 2", () => {
  expect(caesarCipher("cc")).toBe("dd");
});

it("caesarCipher Test -- Wraps Test 1", () => {
  expect(caesarCipher("z")).toBe("a");
});

it("caesarCipher Test -- Wraps Test 2", () => {
  expect(caesarCipher("Z")).toBe("A");
});

it("caesarCipher Test -- Works with spaces", () => {
  expect(caesarCipher("a b c")).toBe("b c d");
});

it("caesarCipher Test -- Punctuation simple test", () => {
  expect(caesarCipher("a.")).toBe("b.");
});

it("caesarCipher Test -- Punctuation complex test", () => {
  expect(caesarCipher("Bat! OMG, it's a bat.")).toBe("Cbu! PNH, ju't b cbu.");
});
