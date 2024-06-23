import nock = require("nock");
import { getCompaniesSearchConfig, getNumCompanies } from "../../../../../src";
import { IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";
import { configParams, resourceWithParams, urlBase } from "../../../../mocks/mockGetNumCompaniesParams";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getNumCompanies", (): void => {
      describe("negative.response.status.invalid", (): void=> {
        it("should throw the expected error when an HTTP 400 status is returned", async(): Promise<void> => {
          /*
           * Arrange
           */
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(configParams);
          const expectedErrorMessageFragment: string = "main.requests.getNumCompanies"
          nock(urlBase)
            .get(resourceWithParams)
            .reply(400);

          /*
           * Act
           */
          const errorHandler = async (): Promise<void> => {
            await getNumCompanies({ config });
          };

          /*
           * Assert
           */
          await expect(errorHandler()).rejects.toThrow(expectedErrorMessageFragment);
        });
      });
    });
  });
});