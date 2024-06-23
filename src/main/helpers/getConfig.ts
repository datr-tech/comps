import { strict as assert } from 'assert';
import {
  CONSTS_COMPANIES_API_BASE_URL,
  CONSTS_COMPANIES_API_REST_METHOD_DEFAULT,
  CONSTS_COMPANIES_API_STARTING_INDEX_DEFAULT
} from "../../consts";
import {
  IGetConfig,
  IGetConfigInput,
  IGetConfigOutput
} from "../../interfaces";

/**
 *
 * @param apiKey
 * @param searchArea
 * @param apiRestMethod
 * @param baseApiUrl
 * @param startingIndex
 * @param checkUrlValid
 */
export const getConfig: IGetConfig = ({
  apiKey,
  searchArea,
  apiRestMethod = CONSTS_COMPANIES_API_REST_METHOD_DEFAULT,
  baseApiUrl = CONSTS_COMPANIES_API_BASE_URL,
  startingIndex = CONSTS_COMPANIES_API_STARTING_INDEX_DEFAULT,
  checkUrlValid = false
}: IGetConfigInput): IGetConfigOutput => {

  /*
   * Define a string variable that will be used a prefix within
   * any thrown errors. The string should uniquely define the
   * 'location' of this module (relative to the filepath from ./src).
   */
  const errorPrefix: string = "main.helpers.getConfig";

  /*
   * Assert that the values of the apiKey, baseApiUrl
   * and searchArea params are not equal to ""
   */
  assert.notEqual(apiKey, "", `${errorPrefix}: the 'apiKey' param should not be an empty string.`);
  assert.notEqual(baseApiUrl, "", `${errorPrefix}: the 'baseApiUrl' param should not be an empty string.`);
  assert.notEqual(searchArea, "", `${errorPrefix}: the 'searchArea' param should not be an empty string.`);

  /*
   * If checkUrlValid is true, then ensure that the
   * value of the baseApiUrl param is a valid URL.
   */
  if (checkUrlValid) {
    try {
      new URL(baseApiUrl);
    } catch(error) {
      throw new assert.AssertionError({
        message: `${errorPrefix}: the value of the 'baseApiUrl' param is an invalid URL. ` + error.message,
      });
    }
  }

  return {
    method: apiRestMethod,
    maxBodyLength: Infinity,
    url: `${baseApiUrl}?location=${searchArea}&start_index=${startingIndex}`,
    headers: {
      Authorization: `${apiKey}`,
    }
  } as IGetConfigOutput;
};
