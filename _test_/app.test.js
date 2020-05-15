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

  it("should return a MasterCard on 5105105105105100", () => {
    const results = checkCardNumber(5105105105105100);
    expect(results).toBe("MasterCard");
  });

  it("should return a Visa on 4012888888881881", () => {
    const results = checkCardNumber(4012888888881881);
    expect(results).toBe("Visa");
  });

  it("should return a American Express on 378282246310005", () => {
    const results = checkCardNumber(378282246310005);
    expect(results).toBe("American Express");
  });
});
