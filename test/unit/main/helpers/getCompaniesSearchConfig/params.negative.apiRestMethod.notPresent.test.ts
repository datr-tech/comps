import { ApiRestMethodEnum } from "../../../../../src/config";
import { getCompaniesSearchConfig } from "../../../../../src";
import { IGetCompaniesSearchConfigInput, IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.apiRestMethod.notPresent", (): void => {
        it("should use the default value when the 'apiRestMethod' param is not present", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "TEST_SEARCH_AREA";
          const methodExpected: ApiRestMethodEnum = ApiRestMethodEnum.GET

          /*
           * Act
           */
          const params: IGetCompaniesSearchConfigInput = { apiKey, searchArea };
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(params);

          /*
           * Assert
           */
          expect(config.method).toContain(methodExpected);
        });
      });
    });
  });
});
