import { strict as assert } from "assert";
import { getConfig } from "../../../../../src";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.apiKey.empty", () => {
        it("should throw an error when the value of 'apiKey' is an empty string", () => {
          /*
           * Arrange
           */
          const apiKey = "";
          const searchArea = "TEST_SEARCH_AREA";

          /*
           * Act
           */
          const errorHandler = () => {
            getConfig({ apiKey, searchArea });
          };

          /*
           * Assert
           */
          expect(errorHandler).toThrow(assert.AssertionError);
          expect(errorHandler).toThrow(
            "main.helpers.getConfig: the 'apiKey' param should not be an empty string.",
          );
        });
      });
    });
  });
});
