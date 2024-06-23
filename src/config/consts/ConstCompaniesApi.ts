import { ResponseType } from "axios";
import { ApiResponseEncodingEnum, ApiRestMethodEnum } from "../enums";

export const CONST_COMPANIES_API_BASE_URL: string = "https://api.company-information.service.gov.uk/advanced-search";
export const CONST_COMPANIES_API_SEARCH_URL: string = `${CONST_COMPANIES_API_BASE_URL}/companies`;
export const CONST_COMPANIES_API_RESPONSE_ENCODING_DEFAULT: ApiResponseEncodingEnum = ApiResponseEncodingEnum.UTF8;
export const CONST_COMPANIES_API_RESPONSE_TYPE_DEFAULT: ResponseType = "json";
export const CONST_COMPANIES_API_REST_METHOD_DEFAULT: ApiRestMethodEnum = ApiRestMethodEnum.GET;
export const CONST_COMPANIES_API_START_INDEX_DEFAULT: number = 1;
