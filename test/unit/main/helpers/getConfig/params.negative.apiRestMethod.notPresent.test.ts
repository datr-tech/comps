import { CONSTS_COMPANIES_API_REST_METHOD_DEFAULT } from "../../../../../src/consts";
import { getConfig } from "../../../../../src";
import { IGetConfigInput } from "../../../../../src/interfaces";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.negative.apiRestMethod.notPresent", () => {
        it("should use the default value when the 'apiRestMethod' param is not present", () => {
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

          /*
           * Assert
           */
          expect(config.method).toContain(
            CONSTS_COMPANIES_API_REST_METHOD_DEFAULT,
          );
        });
      });
    });
  });
});
