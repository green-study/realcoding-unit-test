import Calculator from "../js/calculator/Calculator";

describe("사칙연산 곱셈 테스트.", () => {
  test("3과 6을 곱하면 18이다.", () => {
    expect(3 * 6).toEqual(18);
  });
});
