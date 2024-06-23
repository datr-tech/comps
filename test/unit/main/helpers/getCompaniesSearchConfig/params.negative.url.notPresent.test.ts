import { getCompaniesSearchConfig } from "../../../../../src";
import { IGetCompaniesSearchConfigInput, IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";

describe("main", (): void => {
  describe("helpers", (): void => {
    describe("getCompaniesSearchConfig", (): void => {
      describe("params.negative.url.notPresent", (): void => {
        it("should use the default value when the 'url' param is not present", (): void => {
          /*
           * Arrange
           */
          const apiKey: string = "TEST_API_KEY";
          const searchArea: string = "TEST_SEARCH_AREA";
          const urlExpected: string = "https://api.company-information.service.gov.uk/advanced-search/companies";

          /*
           * Act
           */
          const params: IGetCompaniesSearchConfigInput = { apiKey, searchArea };
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(params);

          /*
           * Assert
           */
          expect(config.url).toContain(urlExpected);
        });
      });
    });
  });
});
