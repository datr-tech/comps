import nock = require("nock");
import { getCompaniesSearchConfig, getCompaniesFromStartIndex } from "../../../../../src";
import { IGetCompaniesSearchConfigOutput } from "../../../../../src/interfaces";
import { configParams, resourceWithParams, urlBase } from "../../../../mocks/mockGetCompaniesFromStartIndexParams";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getCompaniesFromStartIndex", (): void => {
      describe("negative.response.data.undefined", (): void => {
        it("should throw the expected error when response.data is undefined", async (): Promise<void> => {
          /*
           * Arrange
           */
          const config: IGetCompaniesSearchConfigOutput = getCompaniesSearchConfig(configParams);
          const expectedErrorMessageFragment: string =
            "main.requests.getCompaniesFromStartIndex: Undefined response.data";
          nock(urlBase).get(resourceWithParams).reply(200);

          /*
           * Act
           */
          const errorHandler = async (): Promise<void> => {
            await getCompaniesFromStartIndex({ config });
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
