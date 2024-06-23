import { strict as assert } from "assert";
import { getCompaniesSearchConfig } from "../../../../../src";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.url.empty", (): void => {
        it("should throw an error when the value of 'url' param is an empty string", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "TEST_SEARCH_AREA";
          const url: string = "";
          const expectedErrorMessage: string =
            "main.helpers.getCompaniesSearchConfig: the 'url' param should not be an empty string.";

          /*
           * Act
           */
          const errorHandler = (): void => {
            getCompaniesSearchConfig({ apiKey, searchArea, url });
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
