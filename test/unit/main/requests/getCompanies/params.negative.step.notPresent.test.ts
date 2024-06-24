import nock = require("nock");
import { getCompanies } from "../../../../../src";
import {
  configParams,
  responseItemCompanyKind,
  responseItemCompanyName,
  responseItems,
  resourceWithParams,
  urlBase,
} from "../../../../mocks/mockGetCompaniesFromStartIndexParams";

describe("main", (): void => {
  describe("requests", (): void => {
    describe("getCompanies", (): void => {
      describe("params.negative.step.notPresent", (): void => {
        it("should use the default value when the 'step' param has not been received", async (): Promise<void> => {
          /*
           * Arrange
           */
          const apiKey: string = configParams.apiKey;
          const searchArea: string = configParams.searchArea;

          nock(urlBase).get(resourceWithParams).reply(200, { items: responseItems });
          /*
           * Act
           */
          const companies = await getCompanies({ apiKey, searchArea });

          /*
           * Assert
           */
        });
      });
    });
  });
});
