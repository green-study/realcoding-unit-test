import Calculator from "../../js/calculator/Calculator";

const cal = new Calculator();

console.log("Calculator Test");

describe("음수 양수 판단", () => {
  console.log("음수 양수 판단 start");
  test("isNegative에 -1을 넣으면 true를 반환한다.", () => {
    expect(cal.isNegative(-1)).toEqual(true);
  });
  test("isNegative에 0을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(0)).toEqual(false);
  });
  test("isNegative에 1을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(1)).toEqual(false);
  });
  console.log("음수 양수 판단 end");
});

describe("Date 클래스 판단하기", () => {
  console.log("Date 클래스 판단 start");
  test("getDate를 하면 Date 객체가 나온다.", () => {
    let date = cal.getDate();
    expect(cal.getDate() instanceof Date).toEqual(true);
  });
  console.log("Date 클래스 판단 end");
});

console.log("Calculator Test 종료");
