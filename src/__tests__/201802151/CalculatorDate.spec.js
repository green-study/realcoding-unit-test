import Calculator from "../../js/calculator/Calculator";

const cal = new Calculator();
describe("Date 클래스 판단하기", () => {
  test("getDate == instanceOf Date", () => {
    expect(cal.getDate()).toBeInstanceOf(Date);
  });
});
