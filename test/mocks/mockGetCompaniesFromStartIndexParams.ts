import { ICompany, IGetCompaniesSearchConfigInput } from "../../src/interfaces";
import { apiKey, resource, searchArea, startIndex } from "./mockGetNumCompaniesParams";

export const urlBase: string = "https://www.getCompaniesFromStartIndex.test.com";
export const url: string= `${urlBase}/companies`;

export const resourceWithParams: string = `${resource}?location=${searchArea}&start_index=${startIndex}`;
export const configParams: IGetCompaniesSearchConfigInput = {
  apiKey,
  searchArea,
  startIndex,
  url
};
export const responseItemCompanyName: string = "TEST_COMPANY_NAME";
export const responseItemCompanyNumber: string = "TEST_COMPANY_NUMBER";
export const responseItemCompanyStatus: string = "ACTIVE";
export const responseItemCompanyType: string = "TEST_COMPANY_TYPE";
export const responseItemCompanyKind: string = "TEST_COMPANY_KIND";
export const responseItemCompanyDateOfCreation: string = "2000";
export const responseItems: ICompany[] = [{
  company_name: responseItemCompanyName,
  company_number: responseItemCompanyNumber,
  company_status: responseItemCompanyStatus,
  company_type: responseItemCompanyType,
  kind: responseItemCompanyKind,
  date_of_creation: responseItemCompanyDateOfCreation
}];


