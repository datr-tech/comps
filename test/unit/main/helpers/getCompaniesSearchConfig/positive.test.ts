import { ResponseType } from "axios";
import {
  ApiResponseEncodingEnum,
  ApiRestMethodEnum } from "../../../../../src/config";
import { getCompaniesSearchConfig } from "../../../../../src";
import {
  IGetCompaniesSearchConfigInput,
  IGetCompaniesSearchConfigOutput
} from "../../../../../src/interfaces";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("positive", (): void => {
        it("should return the expected values", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const apiResponseEncoding: ApiResponseEncodingEnum = ApiResponseEncodingEnum.UTF;
          const apiResponseType: ResponseType = "text";
          const apiRestMethod: ApiRestMethodEnum = ApiRestMethodEnum.POST;
          const checkUrlValid: boolean = true;
          const searchArea: string = "TEST_SEARCH_AREA";
          const startIndex: number = 100;
          const url: string = "https://www.test.com";

          /*
           * Act
           */
          const params: IGetCompaniesSearchConfigInput = {
            apiKey,
            apiResponseEncoding,
            apiResponseType,
            apiRestMethod,
            checkUrlValid,
            searchArea,
            startIndex,
            url
          };
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(params);

          /*
           * Assert
           */
          expect(config.headers.Authorization).toEqual(apiKey);
          expect(config.method).toEqual(apiRestMethod.toString());
          expect(config.maxBodyLength).toEqual(Infinity);
          expect(config.params["location"]).toEqual(searchArea);
          expect(config.params["start_index"]).toEqual(startIndex);
          expect(config.responseEncoding).toEqual(apiResponseEncoding.toString());
          expect(config.responseType).toEqual(apiResponseType);
          expect(config.url).toEqual(url);
        });
      });
    });
  });
});
