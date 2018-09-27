import stringUtils from "./stringUtils";

describe("#stringUtils", () => {
  describe("#isBlank", () => {
    it("returns true for string of characters with spaces", () => {
      expect(stringUtils.isBlank(" &%^ &9 ")).toEqual(false);
    });

    it("returns true for string of characters", () => {
      expect(stringUtils.isBlank("578erger")).toEqual(false);
    });

    it("returns true for string with no characters", () => {
      expect(stringUtils.isBlank("")).toEqual(true);
    });

    it("returns true for string of black spaces", () => {
      expect(stringUtils.isBlank("    ")).toEqual(true);
    });
  });

  describe("#isAlphaNumericWithSpaces", () => {
    it("returns false for non-alphanumeric characters", () => {
      expect(stringUtils.isAlphaNumericWithSpaces("&%^&9")).toEqual(false);
    });

    it("returns true for numbers characters with spaces", () => {
      expect(stringUtils.isAlphaNumericWithSpaces("578")).toEqual(true);
    });

    it("returns true for alphabetical characters with spaces", () => {
      expect(
        stringUtils.isAlphaNumericWithSpaces("carrot and brocolli"),
      ).toEqual(true);
    });

    it("returns true for alphanumeric characters with spaces", () => {
      expect(stringUtils.isAlphaNumericWithSpaces("carrot 42")).toEqual(true);
    });
  });
});
