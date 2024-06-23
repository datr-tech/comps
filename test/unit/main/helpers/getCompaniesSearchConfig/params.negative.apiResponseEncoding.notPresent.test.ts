import { ApiResponseEncodingEnum } from "../../../../../src/config";
import { getCompaniesSearchConfig } from "../../../../../src";
import { IGetCompaniesSearchConfigInput, IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.apiResponseEncoding.notPresent", (): void => {
        it("should use the default value when the 'apiResponseEncoding' param is not present", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "TEST_SEARCH_AREA";
          const responseEncodingExpected: ApiResponseEncodingEnum = ApiResponseEncodingEnum.UTF8;

          /*
           * Act
           */
          const params: IGetCompaniesSearchConfigInput = { apiKey, searchArea };
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(params);

          /*
           * Assert
           */
          expect(config.responseEncoding).toEqual(responseEncodingExpected);
        });
      });
    });
  });
});
