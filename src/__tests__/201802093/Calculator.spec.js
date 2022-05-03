import Calculator from "../../js/calculator/Calculator";

const cal = new Calculator();

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

describe("음수 양수 판단", () => {
  test("isNegative에 -1을 넣으면 true를 반환한다.", () => {
    expect(cal.isNegative(-1)).toEqual(true);
  });
  test("isNegative에 0을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(0)).toEqual(false);
  });
  test("isNegative에 1을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(1)).toEqual(false);
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date 객체가 나온다.", () => {
    let date = cal.getDate();
    expect(cal.getDate() instanceof Date).toEqual(true);
  });
});
