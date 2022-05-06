import Calculator from "../js/calculator/Calculator";

const cal = new Calculator();

describe("abs에 대한 테스트 코드", () => {
  test("5의 절대값은 5이다.", () => {
    expect(cal.abs(5)).toEqual(5);
  });
  test("-2의 절대값은 2이다.", () => {
    expect(cal.abs(-2)).toEqual(2);
  });
});
