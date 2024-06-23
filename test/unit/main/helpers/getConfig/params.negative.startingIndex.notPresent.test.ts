import { CONSTS_COMPANIES_API_STARTING_INDEX_DEFAULT } from "../../../../../src/consts";
import { getConfig } from "../../../../../src";
import { IGetConfigInput } from "../../../../../src/interfaces";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.startingIndex.notPresent", () => {
        it("should use the default value when the 'startIndex' param is not present", () => {
          /*
           * Arrange
           */
          const apiKey = "TEST_API_KEY";
          const searchArea = "TEST_SEARCH_AREA";

          /*
           * Act
           */
          const params: IGetConfigInput = { apiKey, searchArea };
          const config = getConfig(params);
          const expected = `start_index=${CONSTS_COMPANIES_API_STARTING_INDEX_DEFAULT}`;

          /*
           * Assert
           */
          expect(config.url).toContain(expected);
        });
      });
    });
  });
});
