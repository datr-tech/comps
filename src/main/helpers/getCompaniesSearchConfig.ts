import { strict as assert } from "assert";
import {
  CONST_COMPANIES_API_SEARCH_URL,
  CONST_COMPANIES_API_RESPONSE_ENCODING_DEFAULT,
  CONST_COMPANIES_API_RESPONSE_TYPE_DEFAULT,
  CONST_COMPANIES_API_REST_METHOD_DEFAULT,
  CONST_COMPANIES_API_START_INDEX_DEFAULT,
} from "../../config";
import {
  IGetCompaniesSearchConfig,
  IGetCompaniesSearchConfigInput,
  IGetCompaniesSearchConfigOutput,
  IGetCompaniesSearchConfigOutputParams,
} from "../../interfaces";

/**
 * Generate the config to be passed to Axios when calling the companies search API.
 *
 * @param {IGetCompaniesSearchConfigInput} params
 * @param {string} params.apiKey
 * @param {string} params.searchArea
 * @param {ApiRestMethodEnum} params.apiRestMethod
 * @param {number} params.startIndex
 * @param {string} params.url
 * @param {boolean} params.checkUrlValid
 * @return {IGetCompaniesSearchConfigOutput}
 * @example
 *  const config = getCompaniesSearchConfig({ apiKey, searchArea });
 */
export const getCompaniesSearchConfig: IGetCompaniesSearchConfig = ({
  apiKey,
  searchArea,
  apiResponseEncoding = CONST_COMPANIES_API_RESPONSE_ENCODING_DEFAULT,
  apiResponseType = CONST_COMPANIES_API_RESPONSE_TYPE_DEFAULT,
  apiRestMethod = CONST_COMPANIES_API_REST_METHOD_DEFAULT,
  startIndex = CONST_COMPANIES_API_START_INDEX_DEFAULT,
  url = CONST_COMPANIES_API_SEARCH_URL,
  checkUrlValid = false,
}: IGetCompaniesSearchConfigInput): IGetCompaniesSearchConfigOutput => {
  /*
   * Define a string variable that will be used as a prefix for
   * each thrown error message. The string will uniquely define the
   * 'location' of the current code module, aiding debugging.
   */
  const errorPrefix: string = "main.helpers.getCompaniesSearchConfig";

  /*
   * Assert that the values of the apiKey, url
   * and searchArea params are not equal to ""
   */
  assert.notEqual(apiKey, "", `${errorPrefix}: the 'apiKey' param should not be an empty string.`);
  assert.notEqual(searchArea, "", `${errorPrefix}: the 'searchArea' param should not be an empty string.`);
  assert.notEqual(url, "", `${errorPrefix}: the 'url' param should not be an empty string.`);

  /*
   * If checkUrlValid is true, then ensure that the
   * value of the baseApiUrl param is a valid URL.
   */
  if (checkUrlValid) {
    try {
      new URL(url);
    } catch (error) {
      throw new assert.AssertionError({
        message: `${errorPrefix}: the value of the 'url' param is an invalid URL. ` + error.message,
      });
    }
  }

  const params: IGetCompaniesSearchConfigOutputParams = {
    location: searchArea,
    start_index: startIndex,
  };

  return {
    headers: {
      Authorization: apiKey,
    },
    method: apiRestMethod.toString(),
    maxBodyLength: Infinity,
    params,
    responseEncoding: apiResponseEncoding.toString(),
    responseType: apiResponseType,
    url: url,
  };
};
