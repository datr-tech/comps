import nock = require("nock");
import { getCompaniesSearchConfig, getNumCompanies } from "../../../../../src";
import { IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";
import { configParams, resourceWithParams, urlBase } from "../../../../mocks/mockGetNumCompaniesParams";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getNumCompanies", (): void => {
      describe("positive", (): void => {
        it("should return the expected number of companies", async (): Promise<void> => {
          /*
           * Arrange
           */
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(configParams);
          const hits: number = 10;
          nock(urlBase).get(resourceWithParams).reply(200, { hits });

          /*
           * Act
           */
          const numCompanies: number = await getNumCompanies({ config });
          /*
           * Assert
           */
          expect(numCompanies).toEqual(hits);
        });
      });
    });
  });
});
