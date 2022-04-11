import { analyzeArray } from "../modules/analyzeArray";

it("analyzeArray Test -- average Test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

it("analyzeArray Test -- min Test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
it("analyzeArray Test -- max Test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
it("analyzeArray Test -- length Test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

it("analyzeArray Test -- average Test 2", () => {
  expect(analyzeArray([0, 1, 8, 3, 4, 2, 6, 10]).average).toBe(4.25);
});

it("analyzeArray Test -- average Test 3", () => {
  expect(analyzeArray([ 1, 8, 3, 4, 2, 6, 10]).average).toBe(4.86);
});

it("analyzeArray Test -- min Test 2", () => {
  expect(analyzeArray([0, 1, 8, 3, 4, 2, 6, 10]).min).toBe(0);
});
it("analyzeArray Test -- max Test 2", () => {
  expect(analyzeArray([0, 1, 8, 3, 4, 2, 6, 10]).max).toBe(10);
});
it("analyzeArray Test -- length Test 2", () => {
  expect(analyzeArray([0, 1, 8, 3, 4, 2, 6, 10]).length).toBe(8);
});
