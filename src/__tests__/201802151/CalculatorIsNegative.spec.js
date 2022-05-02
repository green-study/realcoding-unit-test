import Calculator from "../../js/calculator/Calculator";

const cal = new Calculator();
describe("음수 양수 판단", () => {
  test("3 > 0", () => {
    expect(cal.isNegative(3)).toBeFalsy;
  });
  test("-3 < 0.", () => {
    expect(cal.isNegative(-3)).toBeTruthy;
  });
  test("0 < 0", () => {
    expect(cal.isNegative(0)).not.toBeTruthy;
  });
});
