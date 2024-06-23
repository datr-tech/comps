import nock = require("nock");
import { getCompaniesSearchConfig, getCompaniesFromStartIndex } from "../../../../../src";
import { IGetCompaniesFromStartIndexOutput, IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";
import { configParams, responseItemCompanyKind, responseItemCompanyName, responseItems, resourceWithParams, urlBase } from "../../../../mocks/mockGetCompaniesFromStartIndexParams";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getCompaniesFromStartIndex", (): void => {
      describe("positive", (): void=> {
        it("should return the expected array of data: responseData", async(): Promise<void> => {
          /*
           * Arrange
           */
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(configParams);
          nock(urlBase)
            .get(resourceWithParams)
            .reply(200, { items: responseItems });

          /*
           * Act
           */
          const response: IGetCompaniesFromStartIndexOutput = await getCompaniesFromStartIndex({ config });

          /*
           * Assert
           */
          expect(response.length).toEqual(1);
          expect(response[0]["company_name"]).toEqual(responseItemCompanyName);
          expect(response[0]["kind"]).toEqual(responseItemCompanyKind);
        });
      });
    });
  });
});