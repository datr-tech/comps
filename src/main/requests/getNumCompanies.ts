import axios, { AxiosResponse } from "axios";
import { ICompanies, IGetNumCompanies, IGetNumCompaniesInput, IGetNumCompaniesOutput } from "../../interfaces";

/**
 * Retrieve the number of companies per search config.
 *
 * @param {IGetNumCompaniesInput} params
 * @param {IGetCompaniesSearchConfigOutput} params.config
 * @return {Promise<IGetNumCompaniesOutput>}
 * @example
 *  const config = getCompaniesSearchConfig( ... );
 *  const numCompanies = await getNumCompanies({ config });
 */
export const getNumCompanies: IGetNumCompanies = async ({
  config,
}: IGetNumCompaniesInput): Promise<IGetNumCompaniesOutput> => {
  /*
   * Define a string variable that will be used as a prefix for
   * each thrown error message. The string will uniquely define the
   * 'location' of the current code module, aiding debugging.
   */
  const errorPrefix: string = "main.requests.getNumCompanies";

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

      const companies: ICompanies = response.data;

      /*
       * Only progress when companies.hits is not undefined.
       */
      if (typeof companies.hits === "undefined") {
        throw new Error("Undefined response.data.hits");
      }
      return companies.hits;
    })
    .catch((error) => {
      const errorMessage: string = `${errorPrefix}: ${error.message}`;
      throw new Error(errorMessage);
    });
};
