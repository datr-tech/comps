import { strict as assert } from "assert";
import { getCompaniesSearchConfig } from "../../../../../src";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.searchArea.empty", (): void => {
        it("should throw an error when the value of 'searchArea' is an empty string", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "";
          const expectedErrorMessage: string = "main.helpers.getCompaniesSearchConfig: the 'searchArea' param should not be an empty string.";

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
