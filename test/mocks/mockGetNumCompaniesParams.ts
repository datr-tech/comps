import { IGetCompaniesSearchConfigInput } from "../../src/interfaces";

export const apiKey: string = "TEST_API_KEY";
export const resource: string = "/companies";
export const searchArea: string = "TEST_LOCATION";
export const startIndex: number = 100;
export const urlBase: string = "https://www.getNumCompanies.test.com";
export const url: string = `${urlBase}/companies`;

export const resourceWithParams: string = `${resource}?location=${searchArea}&start_index=${startIndex}`;
export const configParams: IGetCompaniesSearchConfigInput = {
  apiKey,
  searchArea,
  startIndex,
  url,
};
