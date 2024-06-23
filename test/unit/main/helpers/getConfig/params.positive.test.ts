import { CONSTS_COMPANIES_API_BASE_URL, CONSTS_COMPANIES_API_REST_METHOD_DEFAULT } from "../../../../../src/consts";
import { ApiRestMethodEnum } from "../../../../../src/consts";
import { getConfig } from "../../../../../src";
import { IGetConfigInput, IGetConfigOutput } from "../../../../../src/interfaces";

describe("main", () => {
  describe("helpers", () => {
    describe("getConfig", () => {
      describe("params.apiKey.positive", () => {
        it("should return the correct value", () => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const apiRestMethod: ApiRestMethodEnum = CONSTS_COMPANIES_API_REST_METHOD_DEFAULT;
          const baseApiUrl: string = CONSTS_COMPANIES_API_BASE_URL;
          const checkUrlValid: boolean = true;
          const searchArea: string = "TEST_SEARCH_AREA";
          const startingIndex: number = 1;

          /*
           * Act
           */
          const params: IGetConfigInput = {
            apiKey,
            apiRestMethod,
            baseApiUrl,
            checkUrlValid,
            searchArea,
            startingIndex,
          };
          const config: IGetConfigOutput = getConfig(params);

          /*
           * Assert
           */
          expect(config.method).toEqual(apiRestMethod);
          expect(config.maxBodyLength).toEqual(Infinity);
          expect(config.url).toEqual(`${baseApiUrl}?location=${searchArea}&start_index=${startingIndex}`);
          expect(config.headers.Authorization).toEqual(apiKey);
        });
      });
    });
  });
});
