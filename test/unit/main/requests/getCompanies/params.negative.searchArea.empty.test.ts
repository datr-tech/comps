import { strict as assert } from "assert";
import { getCompanies } from "../../../../../src";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getCompanies", (): void => {
      describe("params.negative.searchArea.empty", (): void => {
        it("should throw an error when the value of 'searchArea' is an empty string", async (): Promise<void> => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "";
          let expectedErrorMessage: string = "main.requests.getCompanies: ";
          expectedErrorMessage += "main.helpers.getCompaniesSearchConfig: ";
          expectedErrorMessage += "the 'searchArea' param should not be an empty string.";

          /*
           * Act
           */
          const errorHandler = async (): Promise<void> => {
            await getCompanies({ apiKey, searchArea });
          };

          /*
           * Assert
           */
          await expect(errorHandler()).rejects.toThrow(expectedErrorMessage);
        });
      });
    });
  });
});
