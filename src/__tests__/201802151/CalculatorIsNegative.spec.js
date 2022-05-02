import Calculator from "../../js/calculator/Calculator";

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
});
afterAll(() => {
  console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});
beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행한다.");
});
afterEach(() => {
  console.log("각 테스트가 완료된 후 실행된다.");
});

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
