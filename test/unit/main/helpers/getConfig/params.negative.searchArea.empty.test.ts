import { strict as assert } from "assert";
import { getConfig } from "../../../../../src";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.searchArea.empty", () => {
        it("should throw an error when the value of 'searchArea' is an empty string", () => {
          /*
           * Arrange
           */
          const apiKey = "TEST_API_KEY";
          const searchArea = "";

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
            "main.helpers.getConfig: the 'searchArea' param should not be an empty string.",
          );
        });
      });
    });
  });
});
