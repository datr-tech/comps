import axios, { AxiosResponse } from "axios";
import {
  ICompanies,
  IGetCompaniesFromStartIndex,
  IGetCompaniesFromStartIndexInput,
  IGetCompaniesFromStartIndexOutput,
} from "../../interfaces";

/**
 * Retrieve the default number of companies from startIndex.
 *
 * @param {IGetCompaniesFromStartIndexInput} params
 * @param {IGetCompaniesSearchConfigOutput} params.config
 * @return {Promise<IGetCompaniesFromStartIndexOutput>}
 */
export const getCompaniesFromStartIndex: IGetCompaniesFromStartIndex = async ({
  config,
}: IGetCompaniesFromStartIndexInput): Promise<IGetCompaniesFromStartIndexOutput> => {
  /*
   * Define a string variable that will be used as a prefix for
   * each thrown error message. The string will uniquely define the
   * 'location' of the current code module, aiding debugging.
   */
  const errorPrefix: string = "main.requests.getCompaniesFromStartIndex";

  /*
   * Use Axios to make the required call and return the number of companies.
   */
  return await axios
    .request(config)
    .then((response: AxiosResponse) => {
      /*
       * Only progress when response.data is not undefined.
       */
      if (typeof response.data === "undefined" || typeof response.data !== "object") {
        throw new Error("Undefined response.data");
      }

      const data: ICompanies = response.data;

      /*
       * Only progress when data.items is not undefined.
       */
      if (typeof data.items === "undefined") {
        throw new Error("Undefined response.data.items");
      }

      /*
       * Only progress when data.items is an array.
       */
      if (!Array.isArray(data.items)) {
        throw new Error("Response.data.items is not an array");
      }
      return data.items;
    })
    .catch((error) => {
      const errorMessage: string = `${errorPrefix}: ${error.message}`;
      throw new Error(errorMessage);
    });
};
