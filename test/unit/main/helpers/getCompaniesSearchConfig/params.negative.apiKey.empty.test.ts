import { strict as assert } from "assert";
import { getCompaniesSearchConfig } from "../../../../../src";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.apiKey.empty", (): void => {
        it("should throw an error when the value of 'apiKey' is an empty string", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "";
          const searchArea: string = "TEST_SEARCH_AREA";
          const expectedErrorMessage: string =
            "main.helpers.getCompaniesSearchConfig: the 'apiKey' param should not be an empty string.";

          /*
           * Act
           */
          const errorHandler = (): void => {
            getCompaniesSearchConfig({ apiKey, searchArea });
          };

          /*
           * Assert
           */
          expect(errorHandler).toThrow(assert.AssertionError);
          expect(errorHandler).toThrow(expectedErrorMessage);
        });
      });
    });
  });
});
