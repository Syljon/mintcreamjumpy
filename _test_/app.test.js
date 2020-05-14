var checkCardNumber = require("../app");

describe("checkCardNumber", () => {
  it("should return a string", () => {
    const results = checkCardNumber("");
    expect(typeof results).toBe("string");
  });

  it("should return a Nieprawidłowy on 123", () => {
    const results = checkCardNumber(123);
    expect(results).toBe("Nieprawidłowy");
  });
});
