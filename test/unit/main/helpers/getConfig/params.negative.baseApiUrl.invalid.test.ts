import { CONSTS_COMPANIES_API_BASE_URL } from "../../../../../src/consts";
import { getConfig } from "../../../../../src";
import { IGetConfigInput } from "../../../../../src/interfaces";
import { strict as assert } from "assert";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.baseApiUrl.invalid", () => {
        it("should throw an error when 'baseApiUrl' param is not a valid URL", () => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const baseApiUrl: string = "TEST_INVALID_URL";
          const checkUrlValid: boolean = true;
          const searchArea: string = "TEST_SEARCH_AREA";

          /*
           * Act
           */
          const errorHandler = () => {
            const params: IGetConfigInput = {
              apiKey,
              baseApiUrl,
              checkUrlValid,
              searchArea,
            };
            getConfig(params);
          };

          /*
           * Assert
           */
          expect(errorHandler).toThrow(assert.AssertionError);
          expect(errorHandler).toThrow(
            "main.helpers.getConfig: the value of the 'baseApiUrl' param is an invalid URL.",
          );
        });
      });
    });
  });
});
