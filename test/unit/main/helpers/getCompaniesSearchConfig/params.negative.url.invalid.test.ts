import { getCompaniesSearchConfig } from "../../../../../src";
import { IGetCompaniesSearchConfigInput } from "../../../../../src/interfaces";
import { strict as assert } from "assert";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.url.invalid", (): void => {
        it("should throw an error when the value of the 'url' param is invalid", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const url: string = "TEST_INVALID_URL";
          const checkUrlValid: boolean = true;
          const searchArea: string = "TEST_SEARCH_AREA";
          const expectedErrorMessage: string = "main.helpers.getCompaniesSearchConfig: the value of the 'url' param is an invalid URL.";

          /*
           * Act
           */
          const errorHandler = (): void => {
            const params: IGetCompaniesSearchConfigInput = {
              apiKey,
              url,
              checkUrlValid,
              searchArea,
            };
            getCompaniesSearchConfig(params);
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
