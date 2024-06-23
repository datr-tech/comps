import { ResponseType } from "axios";
import { getCompaniesSearchConfig } from "../../../../../src";
import { IGetCompaniesSearchConfigInput, IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.apiResponseType.notPresent", (): void => {
        it("should use the default value when the 'apiResponseType' param is not present", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "TEST_SEARCH_AREA";
          const responseTypeExpected: ResponseType = "json";

          /*
           * Act
           */
          const params: IGetCompaniesSearchConfigInput = { apiKey, searchArea };
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(params);

          /*
           * Assert
           */
          expect(config.responseType).toEqual(responseTypeExpected);
        });
      });
    });
  });
});
