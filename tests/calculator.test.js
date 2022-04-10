import { calculator } from "../modules/calculator";

it("calculator.add Test -- adds integers Test 1", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it("calculator.add Test -- adds integers Test 2", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

it("calculator.add Test -- adds negative integers test 1", () => {
  expect(calculator.add(-2, -2)).toBe(-4);
});

it("calculator.add Test -- adds negative integers test 2", () => {
  expect(calculator.add(2, -2)).toBe(0);
});

it("calculator.add Test -- add works out to two decimal places", () => {
  expect(calculator.add(0.2, 0.3)).toBe(0.5);
});

it("calculator.subtract Test -- subtracts integers Test 1", () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

it("calculator.subtract Test -- subtracts integers Test 2", () => {
  expect(calculator.subtract(12, 13)).toBe(-1);
});

it("calculator.subtract Test -- subtracts negative integers test 1", () => {
  expect(calculator.subtract(-2, -2)).toBe(0);
});

it("calculator.subtract Test -- subtracts negative integers test 2", () => {
  expect(calculator.subtract(2, -2)).toBe(4);
});

it("calculator.subtract Test -- subtract works out to two decimal places", () => {
  expect(calculator.subtract(0.2, 0.3)).toBe(-0.1);
});

it("calculator.divide Test -- divide works when resulting in integer Test 1", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

it("calculator.divide Test -- divide works when resulting in integer Test 2", () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

it("calculator.divide Test -- divide works when resulting in float Test 1", () => {
  expect(calculator.divide(1, 3)).toBe(0.33);
});

it("calculator.divide Test -- divide works when resulting in float Test 2", () => {
  expect(calculator.divide(8, 9)).toBe(0.89);
});

it('calculator.multiply Test -- multiply works with integers Test 1', () => {
 expect(calculator.multiply(2,4)).toBe(8);
});

it('calculator.multiply Test -- multiply works with integers Test 2', () => {
 expect(calculator.multiply(3,4)).toBe(12);
});

it('calculator.multiply Test -- multiply works with floats Test 1', () => {
 expect(calculator.multiply(2.5,4)).toBe(10);
});

it('calculator.multiply Test -- multiply works with floats Test 2', () => {
 expect(calculator.multiply(2.6,4)).toBe(10.4);
});

it('calculator.multiply Test -- multiply works with floats Test 3', () => {
 expect(calculator.multiply(.1,.2)).toBe(0.02);
});

it('calculator.multiply Test -- multiply works with floats Test 4', () => {
 expect(calculator.multiply(1,1.005)).toBe(1.01);
});
