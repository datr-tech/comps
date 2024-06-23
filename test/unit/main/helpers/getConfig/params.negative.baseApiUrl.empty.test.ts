import { strict as assert } from "assert";
import { getConfig } from "../../../../../src";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.baseApiUrl.empty", () => {
        it("should throw an error when the value of 'baseApiUrl' is an empty string", () => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const baseApiUrl: string = "";
          const searchArea: string = "TEST_SEARCH_AREA";

          /*
           * Act
           */
          const errorHandler = () => {
            getConfig({ apiKey, baseApiUrl, searchArea });
          };

          /*
           * Assert
           */
          expect(errorHandler).toThrow(assert.AssertionError);
          expect(errorHandler).toThrow("main.helpers.getConfig: the 'baseApiUrl' param should not be an empty string.");
        });
      });
    });
  });
});
