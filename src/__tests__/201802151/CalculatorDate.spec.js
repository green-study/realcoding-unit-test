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
describe("Date 클래스 판단하기", () => {
  test("getDate == instanceOf Date", () => {
    expect(cal.getDate()).toBeInstanceOf(Date);
  });
});
