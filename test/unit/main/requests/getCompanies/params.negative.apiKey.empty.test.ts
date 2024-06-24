import { strict as assert } from "assert";
import { getCompanies } from "../../../../../src";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getCompanies", (): void => {
      describe("params.negative.apiKey.empty", (): void => {
        it("should throw an error when the value of 'apiKey' is an empty string", async (): Promise<void> => {
          /*
           * Arrange
           */
          const apiKey: string = "";
          const searchArea: string = "TEST_SEARCH_AREA";
          let expectedErrorMessage: string = "main.requests.getCompanies: ";
          expectedErrorMessage += "main.helpers.getCompaniesSearchConfig: ";
          expectedErrorMessage += "the 'apiKey' param should not be an empty string.";

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
