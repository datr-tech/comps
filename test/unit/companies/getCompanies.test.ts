import { getCompanies } from "../../../src";

describe("companies", () => {
  describe("getCompanies", () => {
    it("should return the expected data", async () => {
      const companies = await getCompanies();
      console.log(companies);
      expect(companies).not.toBeNull();
    });
  });
});
